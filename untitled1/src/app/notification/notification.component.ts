import { Component, OnInit } from '@angular/core';
import {SwPush} from '@angular/service-worker';
import {NotificationService} from '../services/notification.service';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {

  readonly VAPID_PUBLIC_KEY = 'BGPTdizGGybJH0ZHxwHBbNALY-fezzj50FJ5EFLsM9i5GC9VM_ILvB7CY7YW5xf97nvP0H0glA60pldS_V74bSU'

  constructor(
    private swPush: SwPush,
    private notificationService: NotificationService) {
    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    })
      .then(sub => this.notificationService.addPushSubscriber(sub).subscribe())
      .catch(err => console.error("Erreur lors l'autorisation des notifications", err));
  }

}
