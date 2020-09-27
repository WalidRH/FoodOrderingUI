import { MenuData } from './../../model/MenuData.module';
import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dishe-content',
  templateUrl: './dishe-content.component.html',
  styleUrls: ['./dishe-content.component.scss']
})
export class DisheContentComponent implements OnInit {

  @Input() arrayMenu: MenuData[];

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  orderThisMeal(mealElement: MenuData){
    this.router.navigate(['/orderMeal'], {
      queryParams: {
        Meal_id: mealElement.ref
      }
    });
  }

}
