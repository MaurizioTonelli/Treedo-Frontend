import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-clear-navbar',
  templateUrl: './clear-navbar.component.html',
  styleUrls: ['./clear-navbar.component.scss'],
})
export class ClearNavbarComponent implements OnInit {
  constructor(private dialogs: DialogService) {}

  ngOnInit(): void {}

  openLogin() {
    this.dialogs.openLogin();
  }
  openSignup() {
    this.dialogs.openSignup();
  }
}
