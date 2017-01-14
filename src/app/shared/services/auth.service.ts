import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService {

  isLoggedIn: boolean = false;
  redirectUrl: string = '';

  constructor(private http: Http) {
    this.isLoggedIn = !!sessionStorage.getItem('auth_token');
  }

  authenticate(userParams) {
    let serviceURL = environment.baseServiceURL+'/api/authenticate';
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

  }

}
