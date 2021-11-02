import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  template: `
    <button login-button
              type="button"
              (click)="login()">
      Press to Log-in with SAML
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
