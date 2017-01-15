import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { HttpInterceptorService, RESTService } from '@covalent/http';
import { environment } from '../../../environments/environment';
import { MOCK_API } from '../utils/constants';

export interface IUser {
  display_name: string;
  id: string;
  email: string;
  created: Date;
  last_access: Date;
  site_admin: number;
}

@Injectable()
export class UserService extends RESTService<IUser> {

  constructor(private _http: HttpInterceptorService) {
    super(_http, {
      baseUrl: environment.baseServiceURL,
      path: '/api/users',
      //headers: new Headers({'Content-Type': 'application/json', 'Authorization': `Bearer ${sessionStorage.getItem('auth_token')}`})
    });
  }

  staticQuery(): Observable<IUser[]> {
    return this._http.get('data/users.json')
    .map((res: Response) =>  res.json());
  }

}
