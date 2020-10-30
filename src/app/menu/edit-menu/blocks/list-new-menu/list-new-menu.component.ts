import { MenuData } from './../../../../shared/model/MenuData.module';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-list-new-menu',
  templateUrl: './list-new-menu.component.html',
  styleUrls: ['./list-new-menu.component.scss']
})
export class ListNewMenuComponent implements OnInit, OnChanges {

  @Input('newMenuArray') newMenuArray: MenuData[];
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges():void {
    console.log('NEW MENU ', this.newMenuArray);
  }
}
