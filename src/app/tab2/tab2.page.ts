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
import {AlertController} from "@ionic/angular/standalone";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, FormsModule, IonButton, IonIcon]
})
export class Tab2Page {

  public item: string;

  constructor(private shoppingList: ShoppingItemsService, private alertController: AlertController) {
    addIcons({addOutline})
  }

  addItem() {
    console.log("Item introducido por el usuario: ", this.item);
    if (!this.shoppingList.existsItem(this.item)) {
      this.shoppingList.addItem(this.item);
      this.item = '';
      this.alertSuccess();
      console.log("Listado de items actual: ", this.shoppingList.items);
    } else {
      this.alertError();
      console.log("El item", this.item, "ya se encuentra en la lista así que no lo añadimos.");
      this.item = '';
    }
  }

  async alertSuccess() {
    const alert = await this.alertController.create({
      header: 'Éxito',
      message: '!🤍Item añadido🤍!',
      buttons: ['OK']
    })
    await alert.present();
  }

  async alertError() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: '!🤪El item ya existe🤪!',
      buttons: ['OK']
    })
    await alert.present();
  }
}
