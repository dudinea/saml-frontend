import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {Observable, of } from 'rxjs';
import {catchError, map } from 'rxjs/operators';
import {AuthService} from './auth.service';
import {HttpErrorResponse} from '@angular/common/http';
import {AppService} from "./app.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private appService: AppService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.authService.getUserName().pipe(  map(
        userInfo  => {
            console.log('userName', userInfo);
            if (userInfo['userName'] != null) {
                this.updateWelcomeMessage();
                return true;
            } else {
                 return false;
            }
    }), catchError(this.handleError));
    //error => AuthGuard.handleError(error));*/
  }

  private updateWelcomeMessage() {
    this.appService.getWelcomeMessage().subscribe(
      welcomeMessage => {
        console.log("welcomeMessage", welcomeMessage)
        this.appService.updateMessage(welcomeMessage.name);
      }
    );
  }

  handleError(err: HttpErrorResponse) {
    // in a real world root, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error('Error retrieving User');
    let errorMessage = '';
    if (err.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return Observable.throw(errorMessage);
  }
}
