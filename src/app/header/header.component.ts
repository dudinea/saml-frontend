import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  template: `
    <div class="header">
      <div class="link"><a (click)="navigateToLogin()">Login</a></div>
      <div class="link"><a (click)="navigateToLogout()">Logout</a></div>
      <div class="link"><a (click)="navigateToContent()">Protected Content</a></div>
    </div>
  `,
  styles: [
    `.header {
      background: #ccc;
      height: 30px;
    }
    .link {
      float: left;
      padding: 5px;
      margin-right: 10px;
      margin-left: 10px;
    }
    a {
      cursor: pointer;
      color: #0000ff;
    }`
  ]
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }


  ngOnInit(): void {
  }

  navigateToLogin() {
    this.router.navigate(['login']);
  }

  navigateToLogout() {
    this.router.navigate((['logout']));
  }

  navigateToContent() {
    this.router.navigate((['content']));
  }

  //navigateToHome() {
  //  this.router.navigate(['']);
  //}
}
