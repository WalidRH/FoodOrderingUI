import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  categorieName: string = null;
  constructor() { }

  ngOnInit(): void {
  }

  catchEmitedCategorie(categorieSent: {name: string} ){
    console.log('CATCHING Categorie :', categorieSent);
    this.categorieName = categorieSent.name;
  }

}
