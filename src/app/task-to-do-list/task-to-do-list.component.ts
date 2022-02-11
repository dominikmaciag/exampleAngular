import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-to-do-list',
  templateUrl: './task-to-do-list.component.html',
  styleUrls: ['./task-to-do-list.component.css'],
})
export class TaskToDoListComponent {
  newTask!: string;
  tasksList: Array<string> = [];
  clear = '';
  tasksDone: Array<string> = [];

  add() {
    this.tasksList.push(this.newTask);
    this.newTask = '';
  }

  remove(task: string) {
    this.tasksList = this.tasksList.filter((e) => e !== task);
  }

  done(task: string) {
    this.tasksDone.push(task);
    this.remove(task);
  }
}
