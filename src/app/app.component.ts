import { Component, OnInit } from '@angular/core';
import { CreateNewPlaceDialogComponent } from './components/create-new-place-dialog/create-new-place-dialog.component';
import { isNullOrUndefined } from 'util';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Place } from './models/place.model';
import { PlaceService } from './services/place-services/place.service';
import { RegisterDialogComponent } from './components/register-dialog/register-dialog.component';
import { SharedModalDialogComponent } from './components/shared-modal-dialog/shared-modal-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  activeAllFilter = true;
  activeOnlyMeFilter = false;
  userID: string;
  placesList: Place[];

  constructor(
    public dialog: MatDialog,
    private placeService: PlaceService,
  ) {}

  ngOnInit(): void {
    this.loadAllPlaces(false);
  }

  loadAllPlaces(filter: boolean): void {
    this.placeService.getAll().subscribe((response: Place[]) => {
      if (filter) {
        if (this.userID) {
          this.placesList = response.filter(
            (place) => place.userId === this.userID,
          );
        }
      } else {
        this.placesList = response;
      }
    });
  }

  allPlaces(): void {
    if (!this.activeAllFilter) {
      this.activeAllFilter = true;
      this.activeOnlyMeFilter = false;
      this.loadAllPlaces(false);
    }
  }

  filterByMyOwnPlaces(): void {
    if (!this.activeOnlyMeFilter && !isNullOrUndefined(this.userID)) {
      this.activeOnlyMeFilter = true;
      this.activeAllFilter = false;
      this.loadAllPlaces(true);
    }
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
    this.codeToOpenPlaceDialog(null);
  }

  openEditPlaceDialog(place: Place): void {
    let dialogRef = this.codeToOpenSharedDialog('editar');
    dialogRef.afterClosed().subscribe((result) => {
      let actionConfirmed: boolean = result;
      if (actionConfirmed) this.codeToOpenPlaceDialog(place);
    });
  }

  private codeToOpenPlaceDialog(place: Place) {
    let userId = this.userID;
    const dialogRef = this.dialog.open(
      CreateNewPlaceDialogComponent,
      {
        data: { place, userId },
      },
    );

    dialogRef.afterClosed().subscribe((result) => {
      this.loadAgainPlaces();
    });
  }

  private loadAgainPlaces(): void {
    if (this.activeAllFilter) this.loadAllPlaces(false);
    else this.loadAllPlaces(true);
  }

  deletePlace(place: Place): void {
    let dialogRef = this.codeToOpenSharedDialog('eliminar');
    dialogRef.afterClosed().subscribe((result) => {
      if (!isNullOrUndefined(result)) {
        if (result) {
          this.placeService
            .delete(place._id)
            .subscribe((response) => {
              if (response) {
                this.loadAgainPlaces();
              }
            });
        }
      }
    });
  }

  private codeToOpenSharedDialog(
    action: string,
  ): MatDialogRef<SharedModalDialogComponent, any> {
    const dialogRef = this.dialog.open(SharedModalDialogComponent, {
      data: action,
    });

    return dialogRef;
  }

  logout(): void {
    this.activeAllFilter = true;
    this.activeOnlyMeFilter = false;
    this.userID = null;
    this.loadAllPlaces(false);
  }
}
