import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { IHttpInterceptor } from '@covalent/http';

@Injectable()
export class RequestInterceptor implements IHttpInterceptor {
  onRequest(requestOptions: RequestOptionsArgs): RequestOptionsArgs {
    // you add headers or do something before a request here.
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let authToken = sessionStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);
    requestOptions.headers = headers;
    return requestOptions;
  }
}