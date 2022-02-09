import { Component, OnInit } from '@angular/core';
import { materialize } from 'rxjs';

@Component({
  selector: 'app-strong-day',
  templateUrl: './strong-day.component.html',
  styleUrls: ['./strong-day.component.css']
})
export class StrongDayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  date = new Date();
  dog = new Dog('"Java"', 4);
  pi = Math.PI;


  showDog() {
    return 'and is ' + this.dog.age + ' years old';
  }
}

class Dog {
  constructor(public name: string, public age: number) {

  }
}