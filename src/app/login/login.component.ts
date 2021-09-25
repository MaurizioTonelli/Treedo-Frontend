import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Input('login') login: boolean = true;

  constructor(@Inject(MAT_DIALOG_DATA) public data?: { login: boolean }) {
    if (data) {
      this.login = data.login;
    }
  }

  ngOnInit(): void {}

  setToLogin(e?: Event) {
    if (e) {
      e.preventDefault();
    }
    this.login = true;
  }
  setToSignup(e?: Event) {
    if (e) {
      e.preventDefault();
    }
    this.login = false;
  }
}
