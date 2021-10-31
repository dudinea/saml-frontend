import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <app-header> <!--(pageRequested)="onPageChange($event)"--></app-header>
    <div style="text-align:center" class="content">
      <h1>
        Hello, {{username}}
        Welcome to {{title}}!
      </h1>
      <span style="display: block">{{ title }} app is running!</span>
      <router-outlet>
      </router-outlet>  
    </div>
   
    
  `,
  styles: []
})
export class AppComponent {
  title = 'SAML example frontend';
  username = 'Guest';
}
