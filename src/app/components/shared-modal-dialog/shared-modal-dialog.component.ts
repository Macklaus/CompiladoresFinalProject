import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-shared-modal-dialog',
  templateUrl: './shared-modal-dialog.component.html',
  styleUrls: ['./shared-modal-dialog.component.css'],
})
export class SharedModalDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<SharedModalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public actionName: string,
  ) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  done() {
    this.dialogRef.close(true);
  }

  ngOnInit() {}
}
