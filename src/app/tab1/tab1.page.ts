import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonItemSliding, IonItemOptions, IonItemOption, IonIcon, AlertController, IonReorderGroup, IonReorder
} from '@ionic/angular/standalone';
import {ShoppingItemsService} from "../services/shopping-items.service";
import {addIcons} from 'ionicons';
import {trashOutline} from 'ionicons/icons';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonItemSliding, IonItemOptions, IonItemOption, IonIcon, IonReorderGroup, IonReorder],
})
export class Tab1Page {
  constructor(public shoppingList: ShoppingItemsService,
              private alertController: AlertController
  ) {
    addIcons({ trashOutline });
  }

  async removeItem(item: string) {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: '¿Estás seguro de borrar el item?',
      buttons: [
        {
          text: 'Si',
          handler: () => {
            this.shoppingList.removeItem(item);
            console.log("Item", item, "eliminado de la lista de items.")
            console.log("Listado de items actual: ", this.shoppingList.items);
          }
        },
        {
          text: 'No',
          handler: () => {
            console.log("Item", item, "no eliminado.")
            alert.dismiss()
          }
        }]
    })
    await alert.present();
  }

  onRenderItems($event: any) {
    const item = this.shoppingList.items.splice($event.detail.from, 1)[0];

    this.shoppingList.items.splice($event.detail.to, 0, item);

    $event.detail.complete();

    console.log(this.shoppingList.items);
  }
}
