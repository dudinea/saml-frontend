import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

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
    this.authService.logout().subscribe()
  }

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

}
