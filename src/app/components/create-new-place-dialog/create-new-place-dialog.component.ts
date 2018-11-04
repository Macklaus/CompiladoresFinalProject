import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Place } from './../../models/place.model';
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
    @Inject(MAT_DIALOG_DATA) public createPlaces: boolean,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.newPlace = new Place('', '', '');
    this.registerForm = new FormGroup({
      name: new FormControl(this.newPlace.Name, Validators.required),
      description: new FormControl(
        this.newPlace.Description,
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

    this.dialogRef.close('userId');
    this.submitted = false;
  }
}
