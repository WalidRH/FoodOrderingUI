import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  @ViewChild('registerForm') registeredData: NgForm;
  e_mail = '';
  password = '';
  Fname = '';
  Lname = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){

  }

}
