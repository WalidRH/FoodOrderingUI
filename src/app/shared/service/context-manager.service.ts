import { MenuData } from './../model/MenuData.module';
import { element } from 'protractor';
import { Injectable } from '@angular/core';
import foodImageMapping from '../../../assets/context/foodImageMapping.json';
import categorieImageMapping from '../../../assets/context/categorieImageMapping.json';
import { JSONCategorieMapping } from '../model/Categorie.module.js';

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
  constructor() {}

  imagePath(menu: MenuData) {
    console.log('image menu ==> ', menu.image);
    menu.imagePath =
      '../../../assets/images/categories/' + menu.categorie + '/' + menu.image;
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
      case 'image/gif': return ImageFormat.GIF.toString();
      case 'image/png': return ImageFormat.PNG.toString();
      case 'image/jpg': return ImageFormat.JPG.toString();
      case 'image/jpeg': return ImageFormat.JPEG.toString();
      case 'image/pjpeg': return ImageFormat.PJPEG.toString();
      default: return null;
    }
  }

  checkFormat(imageFormat: string): boolean {
    return (!this.getImageFormat(imageFormat)) ? true : false;
  }
}
