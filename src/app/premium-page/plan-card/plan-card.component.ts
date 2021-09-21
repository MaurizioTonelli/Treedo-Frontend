import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan-card',
  templateUrl: './plan-card.component.html',
  styleUrls: ['./plan-card.component.scss'],
})
export class PlanCardComponent implements OnInit {
  @Input('selected') isSelected: boolean = false;
  @Input('price') price: string = '';
  @Input('periodicity') periodicity: string = '';

  constructor() {}

  ngOnInit(): void {}
}
