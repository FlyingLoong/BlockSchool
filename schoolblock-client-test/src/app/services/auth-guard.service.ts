import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Profile } from '../models/profile.model';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) {
  }

  public authenticated(){
    // just a mock
    return true;
  }

  public isTeacher(): boolean {
    // authentication: just mock
    // if authenticated role is 'teacher' return true, else return false
    return false;

    // if authenticated role is 'student'
    // return false;
  }

  public getProfile(): Profile {
    // just a mock
    let studentMock: Profile = {
      id: '1e0ate67',
      name: 'Bob',
      role: 'student',
      email: 'Bob@gmail.com',
      nickname: 'cat',
    };
    let teacherMock: Profile = {
      id: '2r589u7',
      name: 'Mike',
      role: 'teacher',
      email: 'Mike@gmail.com',
      nickname: 'Lion',
    };
    if(this.isTeacher()){
      return teacherMock;
    }else{
      return studentMock;
    }
  }



  public canActivate(): boolean {
    // authentication: just mock
    // if authenticated return true, else redirect to home page and return false
    return true;

    // this.router.navigate(['/course']);
    // return false;
  }

  public resetPassword(): void {
    // just a mock
  }

}



