import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import {  MatSidenavModule,
          MatButtonModule,    
          MatCheckboxModule,
          MatFormFieldModule,
          MatInputModule,
        } from '@angular/material';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';

const appRoutes:Routes=[
  { 
    path:'',
    component: HomeComponent ,
  },

  {
    path: 'registration',
    component: RegistrationComponent,
  },

  {
    path: 'login',
    component: LoginComponent,
  },
  
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegistrationComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
      },

      {
        path: 'registration',
        component: RegistrationComponent,
      },

      {
        path: 'login',
        component: LoginComponent,
      },
      
    ]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
