import { MenuData } from './../../../../shared/model/MenuData.module';
import { ContextManagerService } from './../../../../shared/service/context-manager.service';
import { NgForm } from '@angular/forms';
import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  AfterViewChecked,
  Input,
} from '@angular/core';
import { JSONCategorieMapping } from '../../../../shared/model/Categorie.module';
import { MenuHttpRequestService } from '../../../../shared/service/http-services/menu-http-request.service';
import { NotificationModule } from '../../../../shared/model/notification.module';
import { SharedUtilsService } from '../../../../shared/service/shared-utils.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.scss'],
})
export class AddMenuComponent implements OnInit, AfterViewChecked {
  @ViewChild('ngFormAdd') ngFormAdd: NgForm;
  @Input('newMenuArray') newMenuArray: MenuData[];
  image = '';
  newMenu: MenuData = new MenuData(null, null, null);
  fileData = new FileReader();
  imageFile: File;
  imgReaderResult: string | ArrayBuffer = null;
  displayImage = false;

  error = false;
  constructor(
    private contextManagerService: ContextManagerService,
    private menuHttpService: MenuHttpRequestService,
    private notifMessage: SharedUtilsService
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
    this.menuHttpService
    .uploadImage(uploadImageData, this.newMenu.categorie)
    .subscribe(
      (response) => {
        console.log('IMAGE UPLOADED ', response);
        this.menuHttpService.addMenu(this.newMenu).subscribe(
          (addedMenu: MenuData) => {
            const newAddedMenu = addedMenu;
            this.contextManagerService.setImagePath(newAddedMenu);
            this.newMenuArray.push(newAddedMenu);
            console.log('ADDING ARRAY : ', addedMenu );
            this.ngFormAdd.resetForm();
            this.notifMessage.notificationMessage.next( new NotificationModule('New Menu ADDED', NotificationModule.STATUS_SUCCESS) );
          },
          (error) => {
            console.log('ERROR', error);
            this.notifMessage.notificationMessage.next(new NotificationModule(error.error.error, NotificationModule.STATUS_FAILED));
          }
        );
      },
      (error) => {
        console.log('ERROR ', error);
        this.notifMessage.notificationMessage.next(new NotificationModule(error.error.error, NotificationModule.STATUS_FAILED));
      }
    );
  }

  onCancel() {
    this.imgReaderResult = null;
    this.displayImage = false;
    this.imageFile = null;
  }
}
