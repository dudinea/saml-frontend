import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  template: `
    <button mat-button
              type="button"
              (click)="login()" class="login-btn login-btn-text">
      <span class="login-btn--label">Press to Log-in with SAML</span>
    </button>
  `,
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor() { }
  
  login() {
    AuthService.login();
  }

  ngOnInit(): void {
  }

}
