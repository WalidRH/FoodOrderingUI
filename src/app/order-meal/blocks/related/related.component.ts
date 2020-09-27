import { ContextManagerService } from './../../../shared/service/context-manager.service';
import { MenuData } from './../../../shared/model/MenuData.module';
import { MenuHttpRequestService } from './../../../shared/service/http-services/menu-http-request.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-related',
  templateUrl: './related.component.html',
  styleUrls: ['./related.component.scss']
})
export class RelatedComponent implements OnInit {

  @Input('categorie') categorieValue: string;
  relatedMeals: MenuData[];

  constructor( private menuRequestService: MenuHttpRequestService, private contextManagerService: ContextManagerService ) { }

  ngOnInit(): void {
    this.menuRequestService.getListMenu('categorie', this.categorieValue).subscribe(
      responseData => {
        this.relatedMeals = responseData;
        this.relatedMeals.forEach(element => {
          element.image = this.contextManagerService.imagePath(element.ref);
        });
      }
    );
  }

}
