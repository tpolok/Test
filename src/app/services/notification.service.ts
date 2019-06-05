import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable()
export class NotificationService {

  constructor(private http: HttpClient) {

  }

  addPushSubscriber(sub:any) {
    return this.http.post('#/notification', sub);
  }

}
