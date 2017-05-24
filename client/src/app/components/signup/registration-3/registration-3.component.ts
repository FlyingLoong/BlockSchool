import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import 'fullcalendar';
import * as $ from 'jquery';
import * as moment from 'moment';
import { Course } from '../../../models/course.model';
import { ModuleUnit } from '../../../models/module-unit.model';
import { Project } from '../../../models/project.model';
import { Person } from '../../../models/person.model';
import { User } from '../../../models/user.model';
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

const DEFAULT_USER_PROFILE: User = Object.freeze({
  id: '',
  email: '',
  phoneNumber: '',
  address: '',
  parentName: '',
  relationship: '',
  childName: '',
  childAge: '',
  childGender: '',
  childBirthday: null,
  childInterest: ''
});

@Component({
  selector: 'app-registration-3',
  templateUrl: './registration-3.component.html',
  styleUrls: ['./registration-3.component.css']
})
export class Registration3Component implements OnInit, AfterViewInit  {

  person_email = '';
  person_id = '';
  person_name = '';
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

  userProfile: User = Object.assign({}, DEFAULT_USER_PROFILE);
  subscriptionUserProfile: Subscription;

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
  constructor( @Inject('data') private data, @Inject('auth') private auth,  @Inject('authZero') private authZero, @Inject('signUp') private signUp, private router: Router ) { }

  ngOnInit() {
    // get user profile
    this.person_email = '' + this.authZero.getProfile().email;
    // subscribe in observer mode
    this.searchUserProfileByEmail();
    this.searchMyBookedCourses();
    this.searchMyProjects();
    this.searchCoursesByTeacher();
    this.searchTeachersByProject();
    this.signUp.setProcessStatus('step3');
  }

  ngAfterViewInit() {
    // load an empty calendar
    this.courseCalendar();
  }

  courseCalendar(): void {
    $('#calendar').fullCalendar({
      header: {
        left: 'bookingButton,today',
        center: 'prev title next',
        right: 'month,agendaWeek'
      },
      height: 450,
      aspectRatio: 'auto',
      editable: this.editableOption,
      events: this.courses,
      eventLimit: this.eventLimitOption,
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
      dayClick: this.dayClick.bind(this),
      eventAfterRender: this.eventAfterRender.bind(this),
      viewRender: this.changeTheme.bind(this)
    });
  }

  select(start, end, allDay): void {
    if ($('#calendar').fullCalendar('getView').name === 'agendaWeek' && this.bookingButtonState) {
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

  changeCSS(element: any, key: string): void {
    $(element).css('background-color', this.cssMap[key]['background-color']);
    $(element).css('border-color', this.cssMap[key]['border-color']);
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
    // Only those courses I booked can be canceled and removed from my courses
    if (this.bookingButtonState && (calEvent.student_id === this.person_id)) {
      this.courseIdRemoving = calEvent.id;
      jQuery('#cancelBookedCourseModal').modal('show');
    }
  }

  dayClick(date, jsEvent, view): void {
    $('#calendar').fullCalendar('changeView', 'agendaWeek', date.format('YYYY-MM-DD'));
  }

  // get the user profile from mLab
  searchUserProfileByEmail(): void {
    this.subscriptionUserProfile = this.auth.getUserProfileByEmail(this.person_email)
      .subscribe(profile => {
        this.userProfile = profile;
        // get the user profile
        this.person_name = this.userProfile.childName;
        this.person_id = '' + this.userProfile.id;
        this.person_role = 'student';
        // automatically create people course profile in mLab
        this.data.getMyBookedCoursesByStudent(this.person_id, 'student'); // (observer mode)
      });
  }

  searchMyBookedCourses(): void {
    this.myBookedCourses = [];
    this.subscriptionMyBookedCourses = this.data.getMyBookedCoursesByStudent(this.person_id, 'student')
      .subscribe(courses => {
        this.myBookedCourses = courses;
        this.courses = this.myBookedCourses;
        // invoke displayMyCoursesCalendar() method
        this.displayMyCoursesCalendar();

      });
  }

  searchMyProjects(): void {
    this.subscriptionProjects = this.data.getProjectsByPerson(this.person_id, 'student')
      .subscribe(projects => {
        this.projectsForSearch = projects;
      });
  }
  afterNavBarSearchButtonPressed(): void {
    // clear the previous list before updating
    this.projectsForSearch = [];
    this.projectDescForSearch = '';
    this.teachersForSearch = [];
    this.modulesUnitsForSearch = [];
    this.moduleUnitDescForSearch = '';
    this.searchFilter.project_id = '';
    this.searchFilter.teacher_id = '';
    this.searchFilter.module_unit_id = '';
    // update and display the projects list by student ID
    this.data.getProjectsByPerson(this.person_id, 'student'); // observer mode
  }

  searchTeachersByProject(): void {
    const project_id = this.searchFilter.project_id;
    this.subscriptionTeachers = this.data.getTeachersByProject(project_id)
      .subscribe(teachers => {
        this.teachersForSearch = teachers;
      });
  }
  // when select project in modal , immediately display the project's desc and update corresponding teachers list
  afterModalProjectSelected(): void {
    // update the project description
    this.projectDescForSearch = this.projectsForSearch.find(value => value.id === this.searchFilter.project_id).desc;
    // clear the previous teachers list before updating
    this.teachersForSearch = [];
    // update and display the corresponding teachers list by project ID
    const project_id = this.searchFilter.project_id;
    this.data.getTeachersByProject(project_id); // (observer mode)
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
  searchCoursesByTeacher(): void {
    const teacher_id = this.searchFilter.teacher_id;
    this.subscriptionCourses = this.data.getCoursesByTeacher(teacher_id, 'teacher')
      .subscribe(courses => {
        // hide course information of others and replace by "Taken"
        for ( const course of courses){
          if (course.student_id !== this.person_id) {
            course.title = 'Taken';
          }
        };
        // then update courses
        this.courses = courses;
        this.displayBookingCalendar();
      });
  }
  // when press "Search" button in modal, immediately get all of the teacher's courses
  afterModalSearchButtonPressed(): void {
    // firstly check whether the search input is valid
    if (this.searchFilter.project_id === '' || this.searchFilter.teacher_id === '') {
      jQuery('#invalidSearchInputModal').modal('show');
      return;
    }
    // secondly update projects and teachers
    this.projects = this.projectsForSearch;
    this.teachers = this.teachersForSearch;
    // then update searching label in navbar ( type, project, teacher )
    this.changeSearchLabel();

    // immediately update corresponding modules or units of current project
    this.modulesUnits = this.projects.find(value => value.id === this.projectIdForLabel).modulesUnits;

    // search the corresponding courses by teacher ID
    const teacher_id = this.searchFilter.teacher_id;
    this.data.getCoursesByTeacher(teacher_id, 'teacher'); // observer mode
  }

  // update searching label in navbar ( type, project, teacher )
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

  // only when ModuleUnit selected in Booking Modal, active ModuleUnit information tag
  activeModuleUnitInfo(): boolean {
    if (this.newCourse.desc !== '' && this.newCourse.title !== '') {
      return true;
    }
    return false;
  }

  // When moduleUnit selected in Booking Modal, immediately update the ModuleUnit ( course ) desc
  updateModuleUnitTitleAndDesc() {
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
      delay: { 'show': 1000, 'hide': 100 },
      placement: 'auto', container: 'body',
      trigger: 'hover',
      html: true
    });
  }

}
