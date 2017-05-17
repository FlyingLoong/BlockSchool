import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import 'fullcalendar';
import * as $ from 'jquery';
import * as moment from 'moment';
import { Course } from '../../../models/course.model';
import { ModuleUnit } from '../../../models/module-unit.model';
import { Project } from '../../../models/project.model';
import { Person } from '../../../models/person.model';
import { Filter } from '../../../models/filter.model';
import { Subscription } from 'rxjs/Subscription';
import { Modal } from 'bootstrap/js/modal.js';

// Still can recognize jQuery even after bundle
declare var jQuery: any;

const DEFAULT_COURSE: Course = Object.freeze({
  id: '',
  title: '',
  grade: '',
  desc: '',
  type: '',
  project_id: '',
  project_name: '',
  teacher_id: '',
  teacher_name: '',
  student_id: '',
  student_name: '',
  start: null,
  end: null,
  start_unix: null,
  end_unix: null,
  booked: false
});

@Component({
  selector: 'app-registration-4',
  templateUrl: './registration-4.component.html',
  styleUrls: ['./registration-4.component.css']
})
export class Registration4Component implements OnInit, AfterViewInit  {

  person_name = '';
  person_id = '';
  person_role = '';

  searchFilter: Filter = {
    teacher_id: '',
    project_id: '',
    module_unit_id: ''
  };

  projectTypeForLabel = '';
  projectIdForLabel = '';
  projectDescForLabel = '';
  teacherIdForLabel = '';
  moduleUnitIdForLabel = '';
  projectNameForLabel = '';
  teacherNameForLabel = '';
  moduleUnitTitleForLabel = '';

  projectsForSearch: Project[] = [];
  projectDescForSearch = '';
  projects: Project[] = [];
  subscriptionProjects: Subscription;

  modulesUnitsForSearch: ModuleUnit[] = [];
  moduleUnitDescForSearch = '';
  modulesUnits: ModuleUnit[] = [];

  teachersForSearch: Person[] = [];
  teachers: Person[] = [];
  subscriptionTeachers: Subscription;

  courses: Course[] = [];
  subscriptionCourses: Subscription;

  newCourse: Course = Object.assign({}, DEFAULT_COURSE);
  courseIdRemoving = '';

  startForBookingModal = '';
  endForBookingModal = '';

  myBookedCourses: Course[] = [];
  subscriptionMyBookedCourses: Subscription;

  currentView: any;

  eventLimitOption = true;
  editableOption = false;
  selectableOption = false;

  dateToCellElementList = new Map();
  calEventArray = [];
  eventElementArray = [];
  dayRenderMode = '';

  bookingButtonState = false;
  bookingButtonColor = 'info';

  cssMap = {
    'course-booking': {
      'background-color': '#d2fd35',
      'border-color': '#5bc0de',
    },
    'course-normal': {
      'background-color': '#ffffff',
      'border-color': '#5bc0de',
    },
    'course-conflict': {
      'background-color': '#FECE55',
      'border-color': '#c9c9c9'
    },
  };

  constructor( @Inject('data') private data, private router: Router ) { }

  ngOnInit() {
    // get my profile by authGuard.getProfile()
    // this.person_name = this.authGuard.getProfile().name;
    // this.person_id = this.authGuard.getProfile().id;
    // this.person_role = this.authGuard.getProfile().role;

    // Mock: get my profile (role: student)
    this.person_name = 'Bob';
    this.person_id = '1e0ate67';
    this.person_role = 'student';
  }

  ngAfterViewInit() {
    // load an empty calendar
    this.courseCalendar();
    // load all of my booked courses
    this.searchMyBookedCourses();
    this.changeTheme();

    // Observe my booked courses
    // this.searchMyBookedCourses();
  }

  courseCalendar(): void {
    $('#calendar').fullCalendar({
      header: {
        left: 'bookingButton,today',
        center: 'prev title next',
        right: 'month,agendaWeek'
      },
      height: 450,
      // width vs height
      aspectRatio: 'auto',
      editable: this.editableOption,
      events: this.courses,
      eventLimit: this.eventLimitOption, // allow "more" link when too many events
      eventColor: '#ffffff',
      eventTextColor: '#5bc0de',
      eventBorderColor: '#ffffff',

      // record as utc in server, yet display local time on calendar
      timezone: 'local',

      selectable: this.selectableOption,
      select: this.select.bind(this),
      eventRender: this.eventRender.bind(this),
      dayRender: this.dayRender.bind(this),
      eventClick: this.eventClick.bind(this),
      eventAfterRender: this.eventAfterRender.bind(this),
      viewRender: this.changeTheme.bind(this)
    });
  }

  select(start, end, allDay): void {
    // only when current view is agendaWeek and bookingButton is on
    if ($('#calendar').fullCalendar('getView').name === 'agendaWeek' && this.bookingButtonState) {
      // when click on a calendar cell in agendaWeek, immediately record the time and invoke bookCourse() method
      // timezone: 'local', so the date on calendar is the local time.
      // both "start" and "end" still store UTC though always put the corresponding local time on the calendar
      // p.s. the UTC time will be stored in Mlab
      // invoke this.openBookingModal() method
      this.openBookingModal(start, end);
    }
  }
  bookingButtonClick(): string {
    // turn on the booking-button , the button apply this style and assign state true
    if (!this.bookingButtonState) {
      this.bookingButtonState = true;
      console.log('Book now!');
      // when turn on the booking-button, goto the agendaWeek View ()
      $('#calendar').fullCalendar('changeView', 'agendaWeek');
      return this.bookingButtonColor = 'success';
    } else {
      this.bookingButtonState = false;
      console.log('Can not book!');
      return this.bookingButtonColor = 'info';
    };

  }

  // Render each event
  eventRender(calEvent: any, element: any, view: any): void {
    this.calEventArray.push(calEvent);
    this.eventElementArray.push(element);
    if (calEvent.student_id !== this.person_id) {
      this.changeCSS(element, 'course-normal');
    } else {
      // change those events whose student_id match with mine
      this.changeCSS(element, 'course-booking');
    };
    this.paintEvents();
    this.changeTheme();

  }
  dayRender(date: any, cell: any): void {
    this.currentView = $('#calendar').fullCalendar('getView');
    this.dateToCellElementList.set(date.format('YYYY-MM-DD'), cell);
    // when booking button is on, switch to the booking theme
    if (!this.bookingButtonState) {
      $(cell).css('background-color', '#ffffff');
    } else {
      $(cell).css('background-color', '#dff0d8');
    };
    // render today
    if (date.format('YYYY-MM-DD') === moment().format('YYYY-MM-DD')) {
      $(cell).css('background-color', '#f6ebbc');
    };

    // if the day has any booked course of mine, add the tick sign.
    let hasBookedCourse = false;
    for ( const course of this.courses){
      if ( course.student_id === this.person_id &&
        course.booked &&
        moment(course.start).format('YYYY-MM-DD') === date.format('YYYY-MM-DD')
      ) {
        hasBookedCourse = true;
      }
    }
    if (hasBookedCourse) {
      $(cell).html('<img src="../../../../assets/images/icon-tick-small.png" width="20" height="20">');
    } else {
      // if the day has no booked course and already has a tick sign, remove it.
      if ($('cell:has(img)').length !== 0) {
        $(cell).children('img').remove();
      }
    }
  }

  eventClick(calEvent, view): void {
    // Only those courses I booked can be canceled
    if (this.bookingButtonState && (calEvent.student_id === this.person_id)) {
      this.courseIdRemoving = calEvent.id;
      jQuery('#cancelBookedCourseModal').modal('show');
    }
  }

  updateEvent(): void {
    const eventClient = $('#calendar').fullCalendar('clientEvents');
    eventClient[3].title = 'xxx';
    for (let i = 0 ; i < eventClient.length ; i++) {
    }
  }

  changeCSS(element: any, key: string): void {
    $(element).css('background-color', this.cssMap[key]['background-color']);
    $(element).css('border-color', this.cssMap[key]['border-color']);
  }

  // In keeping with the style of homepage
  changeTheme(): void {
    // Month Year
    $('#calendar h2').css('color', '#777777');
    // week
    $('#calendar span').css({
      'color': '#777777',
    });
    // day
    $('#calendar span.fc-day-number').css({
      'color': '#777777',
    });
  }

  paintEvents(): void {
    // event title
    $('#calendar span.fc-title').css({
      'color': '#5bc0de',
    });
    // event time
    $('#calendar span.fc-time').css({
      'color': '#5bc0de',
    });
  }

  // Press "Search" button to activate the search modal, then:
  // 1.immediately initiate the projects and teachers list
  // 2.immediately initiate the searchFilter
  // 3.invoke searchMyProjects() method
  initSearchModal(): void {
    // 1
    this.projectsForSearch = [];
    this.projectDescForSearch = '';
    this.teachersForSearch = [];
    this.modulesUnitsForSearch = [];
    this.moduleUnitDescForSearch = '';
    // 2
    this.searchFilter.project_id = '';
    this.searchFilter.teacher_id = '';
    this.searchFilter.module_unit_id = '';
    // 3
    this.searchMyProjects();
  }

  // Get all of your projects and update the projects list in search modal
  searchMyProjects(): void {
    this.projectsForSearch = [];
    this.projectDescForSearch = '';
    this.subscriptionProjects = this.data.getProjectsByPerson(this.person_id, 'student')
      .subscribe(projects => {
        this.projectsForSearch = projects;
      });
  }

  // when select project in modal , immediately update the corresponding teachers list
  searchTeachersByProject() {
    // update the project description
    this.projectDescForSearch = this.projectsForSearch.find(value => value.id === this.searchFilter.project_id).desc;
    // update the corresponding teachers list
    this.teachersForSearch = [];
    const project_id = this.searchFilter.project_id;
    this.subscriptionTeachers = this.data.getTeachersByProject(project_id)
      .subscribe(teachers => {
        this.teachersForSearch = teachers;
      });
  }
  // only when project selected, active project information tag
  activeProjectInfo(): boolean {
    if (this.projectDescForSearch !== '') {
      return true;
    }
    return false;
  }

  // only when update teachers, active teacher select list
  activeTeacherSelectList(): boolean {
    if (this.teachersForSearch.length !== 0) {
      return true;
    }
    return false;
  }

  // when press "Search" button in modal, immediately get all of the teacher's courses
  searchCoursesByTeacher(): void {
    // firstly check whether the search input is valid
    if (this.searchFilter.project_id === '' || this.searchFilter.teacher_id === '') {
      jQuery('#invalidSearchInputModal').modal('show');
      return;
    }
    // secondly update projects and teachers
    this.projects = this.projectsForSearch;
    this.teachers = this.teachersForSearch;

    // search courses by teacher
    const teacher_id = this.searchFilter.teacher_id;
    this.subscriptionCourses = this.data.getCoursesByPerson(teacher_id, 'teacher')
      .subscribe(courses => {
        // hide course information of others and replace by "Taken"
        for ( const course of courses){
          if (course.student_id !== this.person_id) {
            course.title = 'Taken';
          }
        }

        // finally update courses
        this.courses = courses;

        // after update courses,immediately update search label ( project -> teacher )
        this.changeSearchLabel();

        // update corresponding modules or units of current project
        this.modulesUnits = this.projects.find(value => value.id === this.projectIdForLabel).modulesUnits;

        // invoke displayBookingCalendar() method
        this.displayBookingCalendar();
      });

  }

  // update search label ( project -> teacher )
  changeSearchLabel(): void {
    this.projectIdForLabel = this.searchFilter.project_id;
    this.teacherIdForLabel = this.searchFilter.teacher_id;

    this.projectNameForLabel = this.projectsForSearch.find(value => value.id === this.projectIdForLabel).name;
    this.projectTypeForLabel = this.projectsForSearch.find(value => value.id === this.projectIdForLabel).type;
    this.projectDescForLabel = this.projectDescForSearch;
    this.teacherNameForLabel = this.teachersForSearch.find(value => value.id === this.teacherIdForLabel).name;
  }

  // when both project and teacher search labels exist, active the booking button
  activeBookingButton(): boolean {
    if (this.projectIdForLabel && this.teacherIdForLabel) {
      return true;
    }
    return false;
  }


  displayBookingCalendar() {
    console.log('Updating Calendar...');
    // after search you can select the cell
    this.selectableOption = true;

    // update the fullCalendar with new options:
    // 1.destroy the fullCalendar
    // 2.create the new fullCalendar
    $('#calendar').fullCalendar('destroy');
    this.courseCalendar();

    // clear all events before updating
    $('#calendar').fullCalendar( 'removeEvents');
    // add new events on Calendar
    $('#calendar').fullCalendar('addEventSource', this.courses);
    // goto agendaWeek View
    $('#calendar').fullCalendar('changeView', 'agendaWeek');

  }

  openBookingModal(start, end) {
    // get timestamp and change the type to Number
    const start_unix = +start.valueOf();
    const end_unix = +end.valueOf();
    if (this.data.checkTimeNotTaken(start_unix, end_unix, this.courses)) {
      // Only when the time is not taken, you can book your course
      this.newCourse.title = '';
      this.newCourse.desc = '';
      this.newCourse.grade = this.projectsForSearch.find(value => value.id === this.projectIdForLabel).grade;
      this.newCourse.type = this.projectTypeForLabel;
      this.newCourse.project_id = this.projectIdForLabel;
      this.newCourse.project_name = this.projectNameForLabel;
      this.newCourse.teacher_id = this.teacherIdForLabel;
      this.newCourse.teacher_name = this.teacherNameForLabel;
      this.newCourse.student_id = this.person_id;
      this.newCourse.student_name = this.person_name;
      this.newCourse.start = start;
      this.newCourse.end = end;
      this.newCourse.start_unix = start_unix;
      this.newCourse.end_unix = end_unix;
      this.newCourse.booked = true;

      // clear module Desc
      this.moduleUnitDescForSearch = '';
      // open booking modal
      this.startForBookingModal = start.format('MMMM Do YYYY, h:mm:ss a');
      this.endForBookingModal = end.format('MMMM Do YYYY, h:mm:ss a');
      jQuery('#bookCourseModal').modal('show');

    } else {
      jQuery('#invalidTimeModal').modal('show');
    }
  }

  // only when project selected, active project information tag
  activeModuleUnitInfo(): boolean {
    if (this.newCourse.desc !== '' && this.newCourse.title !== '') {
      return true;
    }
    return false;
  }

  // When the select moduleUnit, immediately update the course desc
  updateModuleUnitTitleAndDesc(){
    this.newCourse.title = this.modulesUnits.find(value => value.id === this.moduleUnitIdForLabel).title;
    this.newCourse.desc = this.modulesUnits.find(value => value.id === this.moduleUnitIdForLabel).desc;
  }

  // when press "Submit" button in booking modal
  bookCourse() {
    // firstly check whether the booking input is valid
    if (this.newCourse.title === '') {
      jQuery('#invalidBookingInputModal').modal('show');
      return;
    }

    // secondly book this course
    this.data.bookCourseForPerson(this.newCourse, 'student', this.person_id)
      .then((course) => {
        console.log('the course has been reserved');
      })
      .catch(error => console.log(error.body));
    this.newCourse = Object.assign({}, DEFAULT_COURSE);
  }


  searchMyBookedCourses(): void {
    this.myBookedCourses = [];
    this.subscriptionMyBookedCourses = this.data.getCoursesByPerson(this.person_id, 'student')
      .subscribe(courses => {
        this.myBookedCourses = courses;
        this.courses = this.myBookedCourses;

        // invoke displayMyCoursesCalendar() method
        this.displayMyCoursesCalendar();

      });
  }



  displayMyCoursesCalendar() {

    // reset bookingButtonState and color manually
    this.bookingButtonState = false;
    this.bookingButtonColor = 'info';

    // read only, can not edit
    this.selectableOption = false;

    // update the fullCalendar with new options:
    // 1.destroy the fullCalendar
    // 2.create the new fullCalendar
    $('#calendar').fullCalendar('destroy');
    this.courseCalendar();

    // clear all events before updating
    $('#calendar').fullCalendar( 'removeEvents');
    // add new events on Calendar
    $('#calendar').fullCalendar('addEventSource', this.myBookedCourses);
    // goto month View
    $('#calendar').fullCalendar('changeView', 'month');

    // when display my booked courses, clear all search labels.
    this.clearAllSearchLabels();
  }

  // clear all labels for html
  clearAllSearchLabels(): void {
    this.projectIdForLabel = '';
    this.teacherIdForLabel = '';
    this.projectTypeForLabel = '';
    this.projectNameForLabel = '';
    this.teacherNameForLabel = '';
  }


  // when press "Yes" button in "cancelBookedCourse" modal
  removeCourse() {
    const courseRemoving = this.courses.find(value => (value.id === this.courseIdRemoving));
    this.data.removeCourseForPerson(courseRemoving, 'student', this.person_id)
      .then((ok) => {
        console.log('the course has been removed');
      })
      .catch(error => console.log(error.body));
  }

  // Add popover
  eventAfterRender(event, element, view) {
    jQuery(element).popover({
      title: `<span class="glyphicon glyphicon-info-sign"></span> ${event.title}`,
      content: `
                <p><span class="glyphicon glyphicon-tag"></span> ${event.type.toUpperCase()}</p>
                <p><span class="glyphicon glyphicon-blackboard"></span> ${event.project_name}</p>
                <p><span class="glyphicon glyphicon-chevron-right"></span> ${event.title}</p>
                <p><span class="glyphicon glyphicon-chevron-right"></span> ${event.desc}</p>
                <p><span class="glyphicon glyphicon-user"></span> ${event.teacher_name}</p>
                <p><span class ="glyphicon glyphicon-time"></span> ${event.start.format('MMMM Do YYYY, h:mm:ss a')}</p>
                <p><span class ="glyphicon glyphicon-arrow-right"></span> ${event.end.format('MMMM Do YYYY, h:mm:ss a')}</p>
               `,
      delay: { "show": 1000, "hide": 100 },
      placement:'auto', container: 'body',
      trigger: 'hover',
      html: true
    });
  }

}
