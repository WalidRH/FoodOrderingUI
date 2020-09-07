import { Component, OnInit, Input } from '@angular/core';
import { MenuData } from '../../model/MenuData.module';

@Component({
  selector: 'app-dishe-content',
  templateUrl: './dishe-content.component.html',
  styleUrls: ['./dishe-content.component.scss']
})
export class DisheContentComponent implements OnInit {

  @Input() arrayMenu: MenuData[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
