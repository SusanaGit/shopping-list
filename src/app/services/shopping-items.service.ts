import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingItemsService {

  public items: string[];
  public isEmpty: boolean;

  constructor() {
    this.items = [];
    this.isEmpty = true;
  }

  addItem(item: string) {
    this.items.push(item);
    this.isEmpty = false;
  }

  removeItem(item: string) {
    let index = this.items.findIndex( it => it === item);
    if (index != -1) {
      this.items.splice(index, 1);
    }
  }
}
