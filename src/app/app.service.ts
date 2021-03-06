import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Endpoints} from "./endpoints";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class AppService {
  private messageSource: BehaviorSubject<string> = new BehaviorSubject("Guest");
  currentMessage = this.messageSource.asObservable();

  constructor(private http: HttpClient) {}

  public updateMessage(newMessage: string) {
    this.messageSource.next(newMessage);
  }

  public getWelcomeMessage(): Observable<any> {
    return this.http.get(Endpoints.WELCOME_API, {withCredentials : true});
  }

  public getUserDetails(): Observable<any> {
    return this.http.get(Endpoints.USER_INFO_API, {withCredentials : true});
  }
}
