import { ClickService } from './creation-service/click.service';
import { LocalReferenceComponent } from './local-reference/local-reference.component';
import { Component, ViewChild, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ClickService],
})
export class AppComponent implements OnInit {
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
    this.title = 'exampleAngular';
  }

  //local reference
  lista = ['Sprzątanie', 'Gotowanie', 'Nauka'];

  @ViewChild('localRefOnComponent', { static: true }) // robie sobie dostęp do komponentu dziecka w app.html odniesienie
  LocalReferenceComponent!: LocalReferenceComponent;

  example(Input: HTMLInputElement) {
    this.lista.push(Input.value);
    //this.LocalReferenceComponent.list = []; // zerujemy liste, mamy dostęp
  }

  //service
  listClick: Array<number> = [];

  allClicks!: number;
  donee(event: any) {
    this.listClick.push((this.listClick.length += 1));
  }

  // RXJS
  constructor(private ClickService: ClickService) {}
  ngOnInit(): void {
    this.ClickService.getSum().subscribe((clicks) => {
      this.allClicks = clicks;
    });
  }
}

export class Dog {
  constructor(public name: string) {}
}
