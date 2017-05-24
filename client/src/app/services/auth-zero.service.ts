import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Http, Response, Headers } from '@angular/http';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';


declare var Auth0Lock: any;

@Injectable()
export class AuthZeroService {

  // Observe usernameSource
  private username = '';
  private email = '';
  private usernameSource = new BehaviorSubject<String>('');

  private checkUserInfoCompleteSource = new BehaviorSubject<boolean>(false);

  // select a supported language and the size of the buttons for the social providers
  options = {
    language: 'en',
    languageDictionary: {
      title: ''
    },
    auth: {
      // redirect mode (popup mode not recommended)
      redirect: true,
      redirectUrl: 'http://localhost:3000',
      responseType: 'token'
    }
    // socialButtonStyle: 'small'
  };

  // Configure Auth0
  clientId = 'N1V2RfWZJkI9rQqZn9EsYEctYKKYPRAe';
  domain = 'oliver369.auth0.com';

  // Instantiate Lock - with custom options
  lock = new Auth0Lock(this.clientId, this.domain, this.options);

  constructor(private http: Http) {
    this.myOnInit();
  }

  myOnInit() {
    this.getToken();
  }

  public getToken(): void {

    // get nickname from exist profile in localStorage
    if (this.authenticated() && localStorage.getItem('profile')) {
      this.username = JSON.parse(localStorage.getItem('profile')).nickname;
    }

    // Listen for the authenticated event and add callback for it
    this.lock.on('authenticated', (authResult) => {

      // get token and profile
      this.lock.getUserInfo(authResult.accessToken, (error, profile) => {
        if (error) {
          // Handle error
          console.log('Failed to get accessToken!');
          return;
        }

        // update token and profile locally
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('accessToken', authResult.accessToken);
        localStorage.setItem('profile', JSON.stringify(profile));

        this.username = profile.nickname;
        this.email = profile.email;
        // BehaviorSubject ( also Observable ) usernameSource deliver the username value to its Observer
        this.usernameSource.next(this.username);

        // When got the email, check whether the user basic info completed.
        this.checkUserInfoComplete();
      });

    });
    // Print token and profile in localStorage
    // console.log('id_token (in localStorage): ' + localStorage.getItem('id_token'));
    // console.log('accessToken (in localStorage): ' + localStorage.getItem('accessToken'));
    // console.log('profile (in localStorage): ' + localStorage.getItem('profile'));

    // Print member
    // console.log('username (String)' + this.username);
  }

  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    // console.log('tokenNotExpired()');
    // console.log(tokenNotExpired('id_token'));

    // fix a bug :
    return tokenNotExpired('id_token');
  }

  public getUsername(): Observable<String> {
    // BehaviorSubject ( also Observable ) usernameSource deliver the username value to its Observer
    this.usernameSource.next(this.username);

    return this.usernameSource.asObservable();
  }

  public login() {
    // Call the show method to display the widget.
    this.lock.show({
      flashMessage: {
        type: 'success',
        text: 'Hello Block World!'
      },
      theme: {
        logo: '../../assets/images/BlockSchool-Logo.png',
        primaryColor: '#393f4c'
      },
    });


  }

  public logout() {
    // Remove token and profile from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    localStorage.removeItem('accessToken');
  }

  public getProfile(): any {
    if (this.authenticated() && localStorage.getItem('profile')) {
      return JSON.parse(localStorage.getItem('profile'));
    } else {
      this.login();
      return null;
    }
  }

  public resetPassword(): void {
    const profile = this.getProfile();
    const url = `https://${this.domain}/dbconnections/change_password`;
    const headers = new Headers({'content-type': 'application/json'});
    const body = {
      client_id: this.clientId,
      email: profile.email,
      connection: 'Username-Password-Authentication'
    };

    this.http.post(url, body, headers)
      .toPromise()
      .then((res: Response) => {
        console.log(res.json());
      })
      .catch(this.handleError);
  };


  public checkUserInfoComplete(): Observable<boolean> {
    if (this.email !== '') {
      this.http.get(`api/v1/search/profile/email/${this.email}`)
        .toPromise()
        .then((res: Response) => {
          this.checkUserInfoCompleteSource.next(true);
        })
        .catch((e) => {
          this.checkUserInfoCompleteSource.next(false);
        });
    };

    this.checkUserInfoCompleteSource.next(false);

    return this.checkUserInfoCompleteSource.asObservable();
  }
  // error handler
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.body || error);
  }


}
