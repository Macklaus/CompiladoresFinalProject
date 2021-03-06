import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CreateNewPlaceDialogComponent } from './components/create-new-place-dialog/create-new-place-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PlaceService } from './services/place-services/place.service';
import { RegisterDialogComponent } from './components/register-dialog/register-dialog.component';
import { SharedModalDialogComponent } from './components/shared-modal-dialog/shared-modal-dialog.component';
import { SnackBar } from './services/snackbar.service';
import { UserService } from './services/user-services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterDialogComponent,
    LoginDialogComponent,
    CreateNewPlaceDialogComponent,
    SharedModalDialogComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
  ],
  providers: [UserService, SnackBar, PlaceService],
  bootstrap: [AppComponent],
  entryComponents: [
    RegisterDialogComponent,
    LoginDialogComponent,
    CreateNewPlaceDialogComponent,
    SharedModalDialogComponent,
  ],
})
export class AppModule {}
