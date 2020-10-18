import { AuthenticationService } from './../shared/service/http-services/authentication.service';
import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  categorieName: string = null;
  isAdmin = false;
  constructor( private authencationService: AuthenticationService ) { }

  ngOnInit(): void {
    this.authencationService.authenticatedUser.subscribe(
      userData => {
        if ( userData && userData.role === this.authencationService.ROLE_ADMIN ){
          this.isAdmin = true;
        }
      }
    );
  }

  catchEmitedCategorie(categorieSent: {name: string} ){
    console.log('CATCHING Categorie :', categorieSent);
    this.categorieName = categorieSent.name;
  }
}
