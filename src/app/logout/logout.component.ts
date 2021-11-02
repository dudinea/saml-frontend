import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {AppService} from "../app.service";

@Component({
  selector: 'app-logout',
  template: `
    <p>
      <button logout-button
              type="button"
              (click)="logout()">
      Press to Log-out from the applocation
    </button>
    </p>
  `,
  styles: [
  ]
})
export class LogoutComponent implements OnInit {

  logout() : void {
    this.authService.logout().subscribe(
      result => {
        this.appService.updateMessage("Guest");
        this.router.navigate(['login']);
      })
  }

  constructor(private authService: AuthService, private router : Router, private appService: AppService) { }

  ngOnInit(): void {
  }

}
