import { Injectable } from '@angular/core';
import { Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { HttpInterceptorService, RESTService } from '@covalent/http';
import { environment } from '../../../environments/environment';

export interface IUser {
  id: string;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  activated: boolean;
}

@Injectable()
export class UserService extends RESTService<IUser> {

  theme: string = 'blue-orange';

  constructor(private _http: HttpInterceptorService) {
    super(_http, {
      baseUrl: environment.baseServiceURL,
      path: 'api/users',
     });
  }

  staticQuery(): Observable<IUser[]> {
    return this._http.get('data/users.json')
    .map((res: Response) =>  res.json());
  }

  getTheme() {
    return this.theme;
  }

  setTheme(theme: string) {
    this.theme = theme;
  }

}
