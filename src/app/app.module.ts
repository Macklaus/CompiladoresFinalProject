import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CreateNewPlaceDialogComponent } from './components/create-new-place-dialog/create-new-place-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterDialogComponent } from './components/register-dialog/register-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterDialogComponent,
    LoginDialogComponent,
    CreateNewPlaceDialogComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    RegisterDialogComponent,
    LoginDialogComponent,
    CreateNewPlaceDialogComponent,
  ],
})
export class AppModule {}
