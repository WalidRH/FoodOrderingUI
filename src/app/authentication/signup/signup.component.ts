import { SharedUtilsService } from './../../shared/service/shared-utils.service';
import { Router } from '@angular/router';
import { User } from './../../shared/model/User.module';
import { AuthenticationService } from './../../shared/service/http-services/authentication.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NotificationModule } from '../../shared/model/notification.module';

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
  Pnumber = '';
  test = true;
  isLoading = false;
  errorOccured = false;
  RESPONSE_FAILED = 'FAILED';
  errorMessage: string = null;
  constructor( private authenticationService: AuthenticationService,
               private route: Router,
               private sharedUtilsService: SharedUtilsService ) { }

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
        'USER', this.registeredData.form.value.phone);
        user._password = this.registeredData.form.value.pass;
        console.log('USER : ',user );
      this.authenticationService.signup(user).subscribe(
        response => {
          this.isLoading = false;
          this.errorOccured = false;
          console.log('REGISTRATION', response);
          if ( response.Registration === this.RESPONSE_FAILED){
            this.errorOccured = true;
          }else{
            this.loginUser(user.email, user._password);
            this.sharedUtilsService.notificationMessage.next(new NotificationModule(response.Registration, NotificationModule.STATUS_SUCCESS));
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
      response => {
        this.route.navigate(['home']);
      },
      error => {
        this.route.navigate(['login']);
      }
    );
  }

}
