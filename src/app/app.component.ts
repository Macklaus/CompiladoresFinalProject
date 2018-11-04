import { Component } from '@angular/core';
import { Place } from './models/place.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  activeFilter = true;

  placesList: Place[] = [
    new Place('1', 'EAM', 'es una universidad'),
    new Place(
      '1',
      'Aleatorio',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste nemo quidem autem sed aperiam corrupti odit qui accusantium earum itaque aliquam praesentium molestias, commodi possimus sint. Laboriosam labore aspernatur reprehenderit?',
    ),
    new Place(
      '1',
      'Por acá',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste nemo quidem autem sed aperiam corrupti odit qui accusantium earum itaque aliquam praesentium molestias, commodi possimus sint. Laboriosam labore aspernatur reprehenderit?',
    ),
    new Place(
      '1',
      'Por acá',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste nemo quidem autem sed aperiam corrupti odit qui accusantium earum itaque aliquam praesentium molestias, commodi possimus sint. Laboriosam labore aspernatur reprehenderit?',
    ),
    new Place(
      '1',
      'Por acá',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste nemo quidem autem sed aperiam corrupti odit qui accusantium earum itaque aliquam praesentium molestias, commodi possimus sint. Laboriosam labore aspernatur reprehenderit?',
    ),
    new Place(
      '1',
      'Por acá',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste nemo quidem autem sed aperiam corrupti odit qui accusantium earum itaque aliquam praesentium molestias, commodi possimus sint. Laboriosam labore aspernatur reprehenderit?',
    ),
  ];

  allPlaces(): void {
    this.activeFilter = !this.activeFilter;
  }

  filterByMyOwnPlaces(): void {
    this.activeFilter = !this.activeFilter;
  }
}
