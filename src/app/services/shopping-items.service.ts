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
    console.log('Antes del push del nuevo item:', this.items);
    this.items.push(item);
    console.log('Después del push del nuevo item:', this.items);
    this.isEmpty = false;
  }

  removeItem(item: string) {
    console.log('Antes del borrado del item:', this.items);
    let index = this.items.findIndex( it => it === item);
    if (index != -1) {
      this.items.splice(index, 1);
      if (this.items.length == 0) {
        this.isEmpty = true;
      }
    }
    console.log('Después del borrado del item:', this.items);
  }

  removeAllItems() {
    this.items = [];
    this.isEmpty = true;
  }

  existsItem(item: string) {
    const itemFound = this.items.find(it => it.toUpperCase().trim() === item.toUpperCase().trim());
    return itemFound;
  }
}
