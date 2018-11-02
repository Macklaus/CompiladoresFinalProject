import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  activeFilter = true;

  allPlaces(): void {
    this.activeFilter = !this.activeFilter;
  }

  filterByMyOwnPlaces(): void {
    this.activeFilter = !this.activeFilter;
  }
}
