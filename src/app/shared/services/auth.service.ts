import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthService {

  isLoggedIn: boolean = false;
  redirectUrl: string = '';

  constructor(private http: Http) {
    this.isLoggedIn = !!sessionStorage.getItem('auth_token');
  }

  authenticate(userParams) {
    let serviceURL = environment.baseServiceURL+'api/authenticate';
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(serviceURL, userParams, options)
                    .map(res => res.json());
  }

  logout() {
    this.isLoggedIn = false;
    sessionStorage.removeItem('auth_token');
  }

  register(userParams) {
    let serviceURL = environment.baseServiceURL+'api/register';
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(serviceURL, userParams, options)
                    .map(res => res.json());
  }

  sendPasswordResetMail(email) {
    let serviceURL = environment.baseServiceURL+'api/account/reset_password/init';
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(serviceURL, email, options)
                    .map(res => res.json());
  }

  resetPassword(passParams) {
    let serviceURL = environment.baseServiceURL+'api/account/reset_password/finish';
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(serviceURL, passParams, options)
                    .map(res => res.json());
  }

  activateUser(key) {
    let serviceURL = environment.baseServiceURL+'api/activate?key='+key;
    console.log(serviceURL);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(serviceURL, options)
                    .map(res => res.json());
  }

}
