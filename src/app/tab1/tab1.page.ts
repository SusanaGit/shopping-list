import { Component } from '@angular/core';
import {IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel} from '@ionic/angular/standalone';
import {ShoppingItemsService} from "../services/shopping-items.service";



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel],
})
export class Tab1Page {
  constructor(public shoppingList: ShoppingItemsService) {}
}
