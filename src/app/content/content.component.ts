import { Component, OnInit } from '@angular/core';
import {AppService} from "../app.service";

@Component({
  selector: 'app-content',
  template: `
    <p>
      This is application protected content<br/>
      <button mat-button
              type="button"
              (click)="getUserDetails()">
      <span>Get User Deetails</span>
    </button>
    </p>
    <p>
      {{userDetailsText}}
    </p>
  `,
  styles: [
  ]
})
export class ContentComponent implements OnInit {
  constructor(private appService: AppService) {}
  

  userDetailsText : string;


  ngOnInit(): void {
  }
  getUserDetails() {
    this.appService.getUserDetails().subscribe(
      result => {
        // do not want to see it
        if (null !=  result["samlResponse"]) {
          delete result.samlResponse 
        } 
        this.userDetailsText = JSON.stringify(result);
      }
    )
  }
}
