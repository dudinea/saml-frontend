import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Endpoints} from './endpoints';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}
  //constructor() { }

  static login() {
    window.location.href = Endpoints.LOGIN_API;
  }
  //  IUser
  public getUserName(): Observable<Object> {
    return this.http.get<Object>(Endpoints.USER_INFO_API, {withCredentials: true});
  }
}
