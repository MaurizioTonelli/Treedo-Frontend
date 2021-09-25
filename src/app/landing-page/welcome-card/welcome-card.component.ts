import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-welcome-card',
  templateUrl: './welcome-card.component.html',
  styleUrls: ['./welcome-card.component.scss'],
})
export class WelcomeCardComponent implements OnInit {
  constructor(private dialogs: DialogService) {}

  ngOnInit(): void {}

  openSignup() {
    this.dialogs.openSignup();
  }
}
