import { User } from './../models/user.model';

import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';


const DEFAULT_USER = Object.freeze({
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


@Injectable()
export class AuthService {

  user: User = Object.assign({}, DEFAULT_USER);

  private userProfileSource = new BehaviorSubject<User>(this.user);

  constructor(private http: Http) { }

  updateUserProfile(): Promise<User> {
    const headers = new Headers({'content-type': 'application/json'});
    return this.http.post('/api/v1/users', this.user, headers).toPromise()
                        .then((res: Response) => { return res.json(); })
                        .catch(this.handleError);
  }

  getUserProfileByEmail(user_email: string): Observable<User> {
    if (user_email !== '' ) {
      this.http.get(`api/v1/search/profile/email/${user_email}`)
        .toPromise()
        .then((res: Response) => {
          console.log('profile from mLab !!!!!!!!');
          this.userProfileSource.next(res.json());
        })
        .catch(this.handleError);
    } else {
      console.log('Still can not access project ID!');
    }
    return this.userProfileSource.asObservable();
  }
  // error handler
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.body || error);
  }
}
