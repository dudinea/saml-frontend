import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  template: `
    <p>
      This is application protected content
    </p>
  `,
  styles: [
  ]
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
