import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './../shared/service/http-services/authentication.service';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, OnChanges {


  menuItems: string[] = ['home', 'menu', 'contacts', 'about', 'login', 'signup'];

  constructor(private authenticationService: AuthenticationService, private route: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.authenticationService.autoLogin();
    this.setNavBar();
    console.log('Actual activeRoute  NAV BAR : ', this.route.url);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setNavBar();
  }

  onLogout(){
    this.authenticationService.logout();
    this.route.navigate(['login']);
  }

  setNavBar(){
    this.authenticationService.authenticatedUser.subscribe(
      authenticatedUser => {
        console.log('authenticated user ', authenticatedUser);
        console.log('authenticated user !authenticatedUser ', !authenticatedUser); //is Null
        console.log('authenticated user !!authenticatedUser ', !!authenticatedUser); // is Not Null
        if (!!authenticatedUser){
          console.log('authenticated user ', !!authenticatedUser); // is Not Null
           ( authenticatedUser.role === this.authenticationService.ROLE_ADMIN )
           ? this.menuItems.splice(4, 1, 'orders')
           : this.menuItems.splice(4, 2);
           this.menuItems.splice(5, 1, 'logout');
        }
        else{
          console.log('authenticated user ', !!authenticatedUser); // is Not Null
          this.menuItems.splice(4, 1, 'login');
          this.menuItems.splice(5, 1, 'signup');
        }
      }
    );
  }

  mybasketClick(){
    this.route.navigate(['cart']);
  }

}
