import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  signInForm :FormGroup;

  constructor(private router :Router,
              private formBuilder: FormBuilder
  ) { }
  
  ngOnInit() {
    this.signInForm= this.formBuilder.group(){
      email : ['',[Validators.required,Validators.email]],
      password : ['',Validators.required]
    }
  
  }

}
