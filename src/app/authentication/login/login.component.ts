import { AuthenticationService } from './../../shared/service/http-services/authentication.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @ViewChild('authForm') authenticationData: NgForm;
  e_mail = '';
  password = '';
  loading = false;
  error = false;
  errorMessage: string;
  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log('Authentication Form ', this.authenticationData);
    if (this.authenticationData.valid) {
      this.loading = true;
      this.authenticationService
        .login(
          this.authenticationData.form.value.email,
          this.authenticationData.form.value.pass
        )
        .subscribe(
          (responseData) => {
            this.loading = false;
            this.error = false;
            console.log(' responseData ==> ', responseData);
          },
          (error) => {
            this.loading = false;
            this.error = true;
            console.log(' ERROR response ==> ', error.error.error);
            this.errorMessage = error.error.error;
          }
        );

      this.authenticationService.authenticatedUser.subscribe((responseData) => {
        console.log('DATA ', responseData);
      });
    }
  }
}
