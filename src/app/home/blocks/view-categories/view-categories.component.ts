import { element } from 'protractor';
import { JSONCategorieMapping } from './../../../shared/model/Categorie.module';
import { Component, OnInit } from '@angular/core';
import { ContextManagerService } from '../../../shared/service/context-manager.service';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.scss']
})
export class ViewCategoriesComponent implements OnInit {
  categorieArray: JSONCategorieMapping[] = new Array<JSONCategorieMapping>();
  hovered = false;

  constructor(private contextManagerService: ContextManagerService) { }

  ngOnInit(): void {
    // tslint:disable-next-line: no-shadowed-variable
    this.contextManagerService.categoriePath().forEach(element => {
      element.path = '../../../../' + element.path;
      element.hovering = false;
      this.categorieArray.push(element);
    });
    console.log('ARRAY CATEGORIES ', this.categorieArray);
  }

  hoverStatusEnter(element: JSONCategorieMapping): void{
    element.hovering = true;
  }

  hoverStatusLeave(element: JSONCategorieMapping): void{
    element.hovering = false;
  }

}
