import { Injectable } from '@angular/core';
import foodImageMapping from '../../../assets/context/foodImageMapping.json';

@Injectable({
  providedIn: 'root',
})
export class ContextManagerService {
  constructor() {}

  imagePath(id: number): string {
    let path: string = null;
    foodImageMapping.forEach((element) => {
      console.log('JSON ELEMENT ID ' + element.id + ' | CURENT ID ' + id);
      // tslint:disable-next-line: triple-equals
      if (element.id === id) {
        console.log('FOUND');
        path = element.path;
      }
    });
    return path;
  }
}
