import { MenuData } from './../../../../shared/model/MenuData.module';
import { ContextManagerService } from './../../../../shared/service/context-manager.service';
import { NgForm } from '@angular/forms';
import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  AfterViewChecked,
} from '@angular/core';
import { JSONCategorieMapping } from '../../../../shared/model/Categorie.module';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.scss'],
})
export class AddMenuComponent implements OnInit, AfterViewChecked {
  @ViewChild('ngFormAdd') ngFormAdd: NgForm;
  image = '';
  menuName = '';
  price = '';
  newMenu: MenuData = new MenuData();
  fileData = new FileReader();
  imgReaderResult: string | ArrayBuffer = null;
  displayImage = false;
  constructor(private contextManagerService: ContextManagerService) {}
  categorieArray: JSONCategorieMapping[] = new Array<JSONCategorieMapping>();
  ngOnInit(): void {
    this.categorieArray = this.contextManagerService.categoriePath();
    console.log('ARRAY CATEGORIE ', this.categorieArray);
  }

  ngAfterViewChecked() {
    console.log('IMAGE ', this.image);
  }

  onChange(event: Event) {
    console.log('EVENT LOAD FIlE ', event);
    this.displayImage = true;
    let file = (event.target as HTMLInputElement).files[0];
    this.fileData.onload = (progressEvent) => {
      // The file's text will be printed here
      console.log('IMAGE :: WAL', progressEvent.target.result);
      this.imgReaderResult = progressEvent.target.result;
    };
    this.fileData.readAsDataURL(file);

  }

  onSubmit() {
    console.log('NG-FORM', this.ngFormAdd);
  }

  onCancel(){
    this.imgReaderResult = null;
    this.displayImage = false;
  }
}
