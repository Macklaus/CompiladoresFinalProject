import { Component, Inject, OnInit } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { SnackBar } from './../../services/snackbar.service';
import { User } from './../../models/user.model';
import { UserService } from './../../services/user-services/user.service';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css'],
})
export class LoginDialogComponent implements OnInit {
  user: { name: string; password: string } = {
    name: '',
    password: '',
  };
  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public userRegistered: boolean,
    private userService: UserService,
    private snackbar: SnackBar,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {}

  onSubmit(): void {
    this.userService
      .login(this.user.name, this.user.password)
      .subscribe((response: User) => {
        if (isNullOrUndefined(response)) {
          this.snackbar.openSnackBar(
            'el nombre de usuario o contraseña son incorrectos',
          );
        } else {
          this.snackbar.openSnackBar(
            'bienvenido '.concat(response.email),
          );
          this.dialogRef.close(response._id);
        }
      });
  }
}
