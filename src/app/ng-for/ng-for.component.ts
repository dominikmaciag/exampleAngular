import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css'],
})
export class NgForComponent implements OnInit {
  constructor() {
    this.dogs.push(new Dog('Java', 4), new Dog('Push', 6));
  }

  ngOnInit(): void {}

  dogs = new Array<Dog>();
  days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
}
class Dog {
  constructor(public name: string, public age: number) {}
}
