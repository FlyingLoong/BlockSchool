import { User } from './../models/user.model';

import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

const DEFAULT_USER = Object.freeze({
  id:"",
  email: "",
  password: "",
  parentName: "",
  relationship: "",
  childName: "",
  childAge: 5,
  childGender: "",
  childBirthday: "",
  childInterest: ""
})


@Injectable()
export class AuthService {

  user: User = Object.assign({}, DEFAULT_USER);

  constructor(private http: Http) { }

  addNewUser(): Promise<User> {
    let headers = new Headers({'content-type': 'application/json'});
    return this.http.post('/api/v1/users', this.user, headers).toPromise()
                        .then((res: Response) => {return res.json()})
                        .catch(this.handleError);
  }



  // error handler
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.body || error);
  }
}


