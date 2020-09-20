import { User } from './../../shared/model/User.module';
import { AuthenticationService } from './../../shared/service/http-services/authentication.service';
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
  test = true;
  isLoading = false;
  errorOccured = false;
  RESPONSE_FAILED = 'FAILED';
  errorMessage: string = null;
  constructor( private authenticationService: AuthenticationService ) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    if ( this.registeredData.valid ){
      this.isLoading = true;
      // tslint:disable-next-line: max-line-length
      const user = new User(
        this.registeredData.form.value.firstname,
        this.registeredData.form.value.lastname,
        this.registeredData.form.value.email,
        this.registeredData.form.value.pass);
      this.authenticationService.signup(user).subscribe(
        response => {
          this.isLoading = false;
          this.errorOccured = true;
          console.log('REGISTRATION', response);
          if ( response.Registration === this.RESPONSE_FAILED){
            this.errorOccured = true;
          }else{
            this.loginUser(user.email, user._password);
          }
        },
        error => {
          this.isLoading = false;
          this.errorOccured = true;
          this.errorMessage = error.error.error;
        }
      );
    }
  }

  private loginUser(email: string, password: string){
    this.authenticationService.login(email, password).subscribe(
      reponse => {
        alert('SUCCESS');
      },
      error => {
        alert('ERROR');
      }
    );
  }

}
