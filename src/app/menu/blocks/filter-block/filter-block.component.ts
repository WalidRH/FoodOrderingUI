import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { JSONCategorieMapping } from '../../../shared/model/Categorie.module.js';
import { ContextManagerService } from '../../../shared/service/context-manager.service.js';

@Component({
  selector: 'app-filter-block',
  templateUrl: './filter-block.component.html',
  styleUrls: ['./filter-block.component.scss']
})
export class FilterBlockComponent implements OnInit {

  categorieArray: JSONCategorieMapping[] = new Array<JSONCategorieMapping>();

  constructor( private contextManagerService: ContextManagerService) { }

  ngOnInit(): void {
    this.categorieArray = this.contextManagerService.categoriePath();
  }

}
