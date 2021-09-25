import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(public dialog: MatDialog) {}

  openLogin() {
    const dialogRef = this.dialog.open(LoginComponent);
  }
  openSignup() {
    const dialogRef = this.dialog.open(LoginComponent, {
      data: { login: false },
    });
  }
}
