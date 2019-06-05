import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { WhatisComponent } from './whatis/whatis.component';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { HowComponent } from './how/how.component';
import { ProsComponent } from './pros/pros.component';
import { ConsComponent } from './cons/cons.component';
import { NotificationComponent } from './notification/notification.component';
import {NotificationService} from './services/notification.service';
import { ConclusionComponent } from './conclusion/conclusion.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { path: 'welcome', component: WelcomeComponent},
  { path: 'whatis', component: WhatisComponent },
  { path: 'how', component: HowComponent },
  { path: 'pros', component: ProsComponent },
  { path: 'cons', component: ConsComponent },
  { path: 'notification', component: NotificationComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    WhatisComponent,
    WelcomeComponent,
    HowComponent,
    ProsComponent,
    ConsComponent,
    NotificationComponent,
    ConclusionComponent
  ],
  imports: [
    RouterModule.forRoot(routes, {useHash: true}),
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule
  ],
  providers: [NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
