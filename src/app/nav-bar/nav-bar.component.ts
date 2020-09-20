import { AuthenticationService } from './../shared/service/http-services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  menuItems: string[] = ['home', 'menu', 'contacts', 'about', 'login', 'signup', 'orders'];

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {

    this.authenticationService.authenticatedUser.subscribe(
      authenticatedUser => {
        if (!!authenticatedUser){

        }
      }
    );

  }

}
