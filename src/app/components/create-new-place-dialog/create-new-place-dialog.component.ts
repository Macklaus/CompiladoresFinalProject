import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { isNullOrUndefined } from 'util';
import { Place } from './../../models/place.model';
import { PlaceService } from './../../services/place-services/place.service';
import { SnackBar } from 'src/app/services/snackbar.service';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-create-new-place-dialog',
  templateUrl: './create-new-place-dialog.component.html',
  styleUrls: ['./create-new-place-dialog.component.css'],
})
export class CreateNewPlaceDialogComponent implements OnInit {
  registerForm: FormGroup;
  submitted: boolean = false;
  newPlace: Place;

  constructor(
    public dialogRef: MatDialogRef<CreateNewPlaceDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public placeAndUserId: { place: Place; userId: string },
    private placeService: PlaceService,
    private snackbar: SnackBar,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    if (isNullOrUndefined(this.placeAndUserId.place))
      this.newPlace = new Place('', '', '');
    else
      this.newPlace = new Place(
        this.placeAndUserId.place._id,
        this.placeAndUserId.place.name,
        this.placeAndUserId.place.description,
      );

    this.registerForm = new FormGroup({
      name: new FormControl(this.newPlace.name, Validators.required),
      description: new FormControl(
        this.newPlace.description,
        Validators.required,
      ),
    });
  }

  get name() {
    return this.registerForm.get('name');
  }

  get description() {
    return this.registerForm.get('description');
  }

  public onSubmit(): void {
    this.submitted = true;
    if (!this.registerForm.valid) return;

    this.placeService
      .create(
        this.newPlace.name,
        this.newPlace.description,
        this.placeAndUserId.userId,
      )
      .subscribe((response: Place) => {
        if (isNullOrUndefined(response)) {
          this.snackbar.openSnackBar('Ha ocurrido algún error');
        } else {
          this.snackbar.openSnackBar('Se ha creado correctamente');
          this.dialogRef.close();
        }
      });
    this.submitted = false;
  }
}
