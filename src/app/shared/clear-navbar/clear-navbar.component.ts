import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/login/login.component';

@Component({
  selector: 'app-clear-navbar',
  templateUrl: './clear-navbar.component.html',
  styleUrls: ['./clear-navbar.component.scss'],
})
export class ClearNavbarComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openLogin() {
    const dialogRef = this.dialog.open(LoginComponent);
  }
  openSignup() {
    const dialogRef = this.dialog.open(LoginComponent, {
      data: { login: false },
    });
  }
}
