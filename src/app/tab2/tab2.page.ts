import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonInput,
  IonButton,
  IonIcon
} from '@ionic/angular/standalone';
import {FormsModule} from "@angular/forms";
import { addIcons } from 'ionicons';
import { addOutline } from 'ionicons/icons';
import {ShoppingItemsService} from "../services/shopping-items.service";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, FormsModule, IonButton, IonIcon]
})
export class Tab2Page {

  public item: string;

  constructor(private shoppingList: ShoppingItemsService) {
    addIcons({addOutline})
  }

  addItem() {
    console.log("Item introducido por el usuario: ", this.item);
  }
}
