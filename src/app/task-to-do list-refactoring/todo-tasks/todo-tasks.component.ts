import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-tasks',
  templateUrl: './todo-tasks.component.html',
  styleUrls: ['./todo-tasks.component.css']
})
export class TodoTasksComponent implements OnInit {

  @Input('taskProp')
  listTasks = []  as any;

@Output()
emitRemove = new EventEmitter<string>();

@Output()
emitDone = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  remove(task: string){
    this.emitRemove.emit(task);
  }


  done(task: string){
    this.emitDone.emit(task);
  }

}
