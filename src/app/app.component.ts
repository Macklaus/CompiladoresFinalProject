import { Component } from '@angular/core';
import { CreateNewPlaceDialogComponent } from './components/create-new-place-dialog/create-new-place-dialog.component';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Place } from './models/place.model';
import { RegisterDialogComponent } from './components/register-dialog/register-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  activeAllFilter = true;
  activeOnlyMeFilter = false;
  userID: string;

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

  constructor(public dialog: MatDialog) {}

  allPlaces(): void {
    this.activeAllFilter = true;
    this.activeOnlyMeFilter = false;
  }

  filterByMyOwnPlaces(): void {
    this.activeAllFilter = false;
    this.activeOnlyMeFilter = true;
  }

  openRegisterDialog(): void {
    let userRegistered: boolean = false;
    const dialogRef = this.dialog.open(RegisterDialogComponent, {
      data: userRegistered,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.userID = result;
    });
  }

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      data: false,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.userID = result;
    });
  }

  openCreateNewPlaceDialog(): void {
    const dialogRef = this.dialog.open(
      CreateNewPlaceDialogComponent,
      {
        data: false,
      },
    );

    dialogRef.afterClosed().subscribe((result) => {});
  }

  logout(): void {
    this.userID = null;
  }
}
