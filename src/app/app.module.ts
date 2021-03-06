import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClientXsrfModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes : Routes = [
  { path : "login" , component : LoginComponent},
  { path : "logout" , component : LogoutComponent, canActivate: [AuthGuard]},
  { path : "content" , component : ContentComponent, canActivate: [AuthGuard]},
  //{ path: '',    component: AppComponent /*,    canActivate: [AuthGuard] */ },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    ContentComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({cookieName: 'XSRF-TOKEN'}),
    RouterModule.forRoot(routes)
  ],
  providers: [AuthGuard,/* AuthService, LoginGuard,*/ AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
