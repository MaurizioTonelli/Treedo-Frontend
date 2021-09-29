import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  tab: string = 'account';
  constructor() {}

  ngOnInit(): void {}

  selectAccountTab() {
    this.tab = 'account';
  }
  selectPaymentTab() {
    this.tab = 'payment';
  }
  selectNotificationsTab() {
    this.tab = 'notifications';
  }
}
