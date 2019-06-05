import {Component, OnInit} from '@angular/core';
import {SwUpdate} from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'untitled1';

  constructor(private swUpdate: SwUpdate) {
  }

  ngOnInit(): void {
    if (this.swUpdate.isEnabled) {

      this.swUpdate.available.subscribe(() => {

        if (confirm('Une nouvelle version est disponible, voulez-vous la charger ?')) {

          window.location.reload();
        }
      });
    }

  }
}
