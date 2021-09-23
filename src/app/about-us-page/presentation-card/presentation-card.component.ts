import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation-card',
  templateUrl: './presentation-card.component.html',
  styleUrls: ['./presentation-card.component.scss'],
})
export class PresentationCardComponent implements OnInit {
  @Input('name') name: string = '';
  @Input('occupation') occupation: string = '';
  @Input('founderImg') founderImg: string = '';

  constructor() {}

  ngOnInit(): void {}
}
