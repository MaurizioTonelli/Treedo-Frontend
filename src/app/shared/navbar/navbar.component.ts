import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  navItems: { text: string; url: string }[] = [
    { text: 'Home', url: '/' },
    { text: 'Contact', url: '/' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
