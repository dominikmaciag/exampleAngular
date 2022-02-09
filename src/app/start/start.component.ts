import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-strong-day',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

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