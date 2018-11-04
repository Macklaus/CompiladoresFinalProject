import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.css'],
})
export class RegisterDialogComponent implements OnInit {
  registerForm: FormGroup;
  confirmPasswordIsOk: boolean = true;
  submitted: boolean = false;
  user: {
    name: string;
    email: string;
    password: string;
    id: string;
    confirmPassword: string;
  } = {
    name: '',
    email: '',
    password: '',
    id: '',
    confirmPassword: '',
  };

  constructor(
    public dialogRef: MatDialogRef<RegisterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public userRegistered: boolean,
    private formBuilder: FormBuilder,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl(this.user.name, Validators.required),
      email: new FormControl(this.user.email, Validators.email),
      password: new FormControl(this.user.password, [
        Validators.required,
        Validators.minLength(6),
      ]),
      confirmpassword: new FormControl(this.user.confirmPassword),
    });
  }

  get name() {
    return this.registerForm.get('name');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get confirmpassword() {
    return this.registerForm.get('confirmpassword');
  }

  public onSubmit(): void {
    this.submitted = true;
    if (!this.registerForm.valid) return;

    if (!(this.user.password === this.user.confirmPassword)) {
      this.confirmPasswordIsOk = false;
      return;
    }

    this.dialogRef.close('userId');
    this.submitted = false;
    this.confirmPasswordIsOk = true;
  }
}
