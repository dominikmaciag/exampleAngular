import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-two-way',
  templateUrl: './data-binding-two-way.component.html',
  styleUrls: ['./data-binding-two-way.component.css'],
})
export class DataBindingTwoWayComponent {
  profession = 'Programmer';
  skill = 'Angular';
}
