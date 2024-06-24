import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonItemSliding, IonItemOptions, IonItemOption, IonIcon
} from '@ionic/angular/standalone';
import {ShoppingItemsService} from "../services/shopping-items.service";
import {addIcons} from 'ionicons';
import {trashOutline} from 'ionicons/icons';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonItemSliding, IonItemOptions, IonItemOption, IonIcon],
})
export class Tab1Page {
  constructor(public shoppingList: ShoppingItemsService) {
    addIcons({ trashOutline });
  }

  removeItem(item: string) {

  }
}
