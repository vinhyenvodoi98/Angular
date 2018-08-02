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
          MatTreeModule,
          MatIconModule
        } from '@angular/material';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { TestComponent } from './component/home/test/test.component';

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
    LoginComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatTreeModule,
    MatIconModule,
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
