import { MenuData } from './../../shared/model/MenuData.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.scss']
})
export class EditMenuComponent implements OnInit {
  
  newMenuArray: MenuData[];
  constructor() { }

  ngOnInit(): void {
    this.newMenuArray = new Array<MenuData>();
  }

}
