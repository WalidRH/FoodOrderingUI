import { MenuData } from './../model/MenuData.module';
import { element } from 'protractor';
import { Injectable } from '@angular/core';
import foodImageMapping from '../../../assets/context/foodImageMapping.json';
import categorieImageMapping from '../../../assets/context/categorieImageMapping.json';
import { JSONCategorieMapping } from '../model/Categorie.module.js';
import { MenuHttpRequestService } from './http-services/menu-http-request.service';

enum ImageFormat {
  GIF,
  PNG,
  JPG,
  JPEG,
  PJPEG,
}

@Injectable({
  providedIn: 'root',
})
export class ContextManagerService {
  constructor(private menuservice: MenuHttpRequestService) {}

  /**
   *  setImagePath wich is a set of byte array of the image (type blob).
   * @param menu
   */
  setImagePath(menu: MenuData) {
    console.log('image menu ==> ', menu.image);
    this.menuservice.getImageFile(menu.ref).subscribe(
      (data) => {
        this.createImageFromBlob(data, menu);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  /**
   * Creating image from the blob ( the byte array )
   * @param image
   * @param menuItem
   */
  createImageFromBlob(image: Blob, menuItem: MenuData) {
    let reader = new FileReader();
    let blobImage: string | ArrayBuffer;
    // addEventListener is an async action
    reader.addEventListener(
      'load',
      () => {
        menuItem.imagePath = reader.result;
      },
      false
    );

    if (image) {
      reader.readAsDataURL(image);
    }
    console.log('IMAGE BLOB :', blobImage);
  }

  categoriePath(): JSONCategorieMapping[] {
    let arraycategorieMapping: JSONCategorieMapping[] = [];
    categorieImageMapping.forEach((element) => {
      console.log('CATEGORIE ELEMENT : ', element);
      arraycategorieMapping.push(element);
    });

    return arraycategorieMapping;
  }

  private getImageFormat(imageFormat: string): string {
    switch (imageFormat) {
      case 'image/gif':
        return ImageFormat.GIF.toString();
      case 'image/png':
        return ImageFormat.PNG.toString();
      case 'image/jpg':
        return ImageFormat.JPG.toString();
      case 'image/jpeg':
        return ImageFormat.JPEG.toString();
      case 'image/pjpeg':
        return ImageFormat.PJPEG.toString();
      default:
        return null;
    }
  }

  checkFormat(imageFormat: string): boolean {
    return !this.getImageFormat(imageFormat) ? true : false;
  }
}
