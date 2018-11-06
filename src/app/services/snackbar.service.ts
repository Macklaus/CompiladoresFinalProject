import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackBar {
  constructor(public snackBar: MatSnackBar) {}

  openSnackBar(message: string) {
    this.snackBar.open(message, 'cerrar', {
      duration: 3000,
    });
  }
}
