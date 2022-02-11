import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'exampleAngular';
  childList = ['Angular', 'Java'];

  // output
  selected(task: string): void {
    console.log(task);
  }

  // full refactoring to-do-list
  listTasks: Array<string> = [];
  doneTasks: Array<string> = [];

  add(task: string) {
    this.listTasks.push(task);
  }
  remove(task: string) {
    this.listTasks = this.listTasks.filter((e) => e !== task);
  }
  done(task: string) {
    this.doneTasks.push(task);
    this.remove(task);
  }

  // lifecycle hooks
  dog = new Dog('Java');
  show = true;

  changeTitle() {
    this.title = 'Angular is the best';
  }
  changeDog() {
    //this.dog.name = 'Push';
    this.dog = new Dog('exampleDog');
  }
  nothing() {}

  destroy() {
    this.show = !this.show;
  }
}

export class Dog {
  constructor(public name: string) {}
}
