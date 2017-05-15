import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';
import { Project } from '../models/project.model';
import { Person } from '../models/person.model';
import { Http, Response, Headers } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {

  private coursesSource = new BehaviorSubject<Course[]>([]);
  private projectsSource = new BehaviorSubject<Project[]>([]);
  private teachersSource = new BehaviorSubject<Person[]>([]);

  constructor(private http: Http) { }



  getProjectsByPerson(person_id: string, role: string): Observable<Project[]> {
    this.http.get(`api/v1/search/projects/${role}/${person_id}`)
      .toPromise()
      .then((res: Response) => {
        this.projectsSource.next(res.json());
      })
      .catch(this.handleError);

    return this.projectsSource.asObservable();
  }

  getTeachersByProject(project_id: string): Observable<Person[]> {
    this.http.get(`api/v1/search/teachers/project/${project_id}`)
      .toPromise()
      .then((res: Response) => {
        this.teachersSource.next(res.json());
      })
      .catch(this.handleError);

    return this.teachersSource.asObservable();

  }

  getCoursesByPerson(person_id: string, role: string): Observable<Course[]> {
    this.http.get(`api/v1/search/courses/${role}/${person_id}`)
      .toPromise()
      .then((res: Response) => {
        this.coursesSource.next(res.json());
      })
      .catch(this.handleError);

    return this.coursesSource.asObservable();
  }

  checkTimeNotTaken(start_unix: number, end_unix: number, courses: Course[]): boolean{
    let isTaken = false;
    for (let course of courses){
      if (
         (course.start_unix < start_unix && course.end_unix > start_unix)
         ||
         (course.start_unix < end_unix && course.end_unix > end_unix)
         ||
         (start_unix < course.start_unix && end_unix > course.start_unix)
         ||
         (start_unix < course.end_unix && end_unix > course.end_unix)
      ) {isTaken = true; }
    }

    if (isTaken) {
      return false;
    }
    return true;
  };

  bookCourseForPerson(course: Course, role: string, person_id: string): Promise<Course>{
    let headers = new Headers({'content-type': 'application/json'});
    return this.http.post(`api/v1/booking/course/${role}/${person_id}`, course, headers)
      .toPromise()
      .then((res: Response) => {
        this.getCoursesByPerson(course.teacher_id, role);
        return res.json();
      })
      .catch(this.handleError);
  }

  removeCourseForPerson(course: Course, role: string, person_id: string): Promise<Course>{
    let headers = new Headers({'content-type': 'application/json'});
    return this.http.post(`api/v1/removing/course/${role}/${person_id}`, course, headers)
      .toPromise()
      .then((res: Response) => {
        this.getCoursesByPerson(course.teacher_id, 'teacher');
        return res.json();
      })
      .catch(this.handleError);
  }



  // error handler
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.body || error);
  }

}
