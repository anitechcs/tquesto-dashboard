import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { HttpInterceptorService, RESTService } from '@covalent/http';
import { MOCK_API } from '../utils/constants';

export interface IConfiguration {
  title: string;
  id: string;
  user: string;
  modified: Date;
  created: Date;
  icon: string;
  enabled: number;
}

@Injectable()
export class ConfigurationService extends RESTService<IConfiguration>  {

  constructor(private _http: HttpInterceptorService) {
    super(_http, {
      baseUrl: MOCK_API,
      path: '/features',
    });
  }

  staticQuery(): Observable<IConfiguration[]> {
    return this._http.get('data/features.json')
    .map((res: Response) => {
      return res.json();
    });
  }

}
