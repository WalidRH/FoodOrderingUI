import { element } from 'protractor';
import { MenuData } from './../../../shared/model/MenuData.module';
import { MenuHttpRequestService } from './../../../shared/service/http-services/menu-http-request.service';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ContextManagerService } from '../../../shared/service/context-manager.service';

@Component({
  selector: 'app-list-dishes',
  templateUrl: './list-dishes.component.html',
  styleUrls: ['./list-dishes.component.scss'],
})
export class ListDishesComponent implements OnInit, OnChanges {
  constructor(
    private MenuHttpRequestService: MenuHttpRequestService,
    private contextManagerService: ContextManagerService
  ) {}
  @Input() categorie: string;
  MAX_NUMBER_ITEMS = 8;
  PARAM_KEY = 'categorie';
  listDishes: MenuData[];
  mapDishes: Map<number, MenuData[]> = new Map<number, MenuData[]>();
  pageArray: number[];
  currentPage = 1;

  ngOnInit(): void {
      this.getAll();
  }

  ngOnChanges( changes: SimpleChanges ): void{
    console.log('INPUT :: categorie ', this.categorie);
    this.MenuHttpRequestService.getListMenu(this.PARAM_KEY, this.categorie).subscribe(
      responseData => {
        console.log('ARRAY ' + this.categorie + ' => ', responseData);
        this.mapperSetter(responseData);
      }
    );
  }

  private mapperSetter(arrayMenu: MenuData[]) {
    let numberItemsPerPage = 0;
    let pageNumber = 0;
    this.listDishes = new Array<MenuData>();
    this.pageArray = new Array<number>();
    arrayMenu.forEach((element) => {
      numberItemsPerPage++;
      this.contextManagerService.imagePath(element);
      this.listDishes.push(element);
      if (numberItemsPerPage === this.MAX_NUMBER_ITEMS) {
        this.mapDishes.set(++pageNumber, this.listDishes);
        this.listDishes = new Array();
        numberItemsPerPage = 0;
      }
    });
    if (
      numberItemsPerPage < this.MAX_NUMBER_ITEMS &&
      this.listDishes.length > 0
    ) {
      this.mapDishes.set(++pageNumber, this.listDishes);
      this.listDishes = new Array();
      numberItemsPerPage = 0;
    }
    for (let index = 0; index < this.mapDishes.size; index++) {
      this.pageArray.push(index + 1);
    }
    this.listDishes = this.mapDishes.get(1);
  }

  private getAll() {
    this.MenuHttpRequestService.getAllMenu().subscribe((responseData) => {
      this.mapperSetter(responseData);
    });
  }

  showPage(pageNumber: number) {
    this.currentPage = pageNumber;
    this.listDishes = this.mapDishes.get(pageNumber);
  }
}
