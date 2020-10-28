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
import { MenuHttpRequestService } from '../../../../shared/service/http-services/menu-http-request.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.scss'],
})
export class AddMenuComponent implements OnInit, AfterViewChecked {
  @ViewChild('ngFormAdd') ngFormAdd: NgForm;
  image = '';
  newMenu: MenuData = new MenuData(null, null, null);
  fileData = new FileReader();
  imageFile: File;
  imgReaderResult: string | ArrayBuffer = null;
  displayImage = false;

  error = false;
  constructor(
    private contextManagerService: ContextManagerService,
    private menuHttpService: MenuHttpRequestService
  ) {}
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
    this.imageFile = (event.target as HTMLInputElement).files[0];
    if (this.contextManagerService.checkFormat(this.imageFile.type)) {
      this.error = true;
      this.displayImage = false;
    } else {
      this.error = false;
      this.displayImage = true;
    }
    this.fileData.readAsDataURL(this.imageFile);
    this.fileData.onload = (progressEvent) => {
      console.log('IMAGE :: WAL', progressEvent.target.result);
      this.imgReaderResult = progressEvent.target.result;
    };
  }

  onSubmit() {
    console.log('NG-FORM', this.ngFormAdd);
    console.log('New Menu : ', this.newMenu);
    // FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    console.log('IMAGE FILE ', this.imageFile);
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.imageFile, this.imageFile.name);
    console.log('UPLOADING IMAGE ', uploadImageData);
    this.newMenu.image = this.imageFile.name;
    this.menuHttpService.addMenu(this.newMenu).subscribe(
      (response) => {
        console.log('menu Added', response);
        this.menuHttpService
          .uploadImage(uploadImageData, this.newMenu.categorie)
          .subscribe(
            (response) => {
              console.log('IMAGE UPLOADED ', response);
            },
            (error) => {
              console.log('ERROR ', error);
            }
          );
      },
      (error) => {
        console.log('ERROR', error);
      }
    );
  }

  onCancel() {
    this.imgReaderResult = null;
    this.displayImage = false;
    this.imageFile = null;
  }
}
