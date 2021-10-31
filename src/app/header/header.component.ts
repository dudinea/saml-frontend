import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="header">
      <div class="link"><a ><!--(click)="onChangePage(1)"-->Login</a></div>
      <div class="link"><a ><!--(click)="onChangePage(2)"-->Logout</a></div>
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

  constructor() { }

  ngOnInit(): void {
  }

}
