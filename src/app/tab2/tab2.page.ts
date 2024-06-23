import { Component } from '@angular/core';
import {IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonButton} from '@ionic/angular/standalone';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, FormsModule, IonButton]
})
export class Tab2Page {

  public item: string;

  constructor() {}

}
