import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(private dialogs: DialogService) {}

  ngOnInit(): void {}
  openSignup() {
    this.dialogs.openSignup();
  }
}
