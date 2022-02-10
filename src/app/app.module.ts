import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { DataBindingTwoWayComponent } from './data-binding-two-way/data-binding-two-way.component';
import { FormsModule } from '@angular/forms';
import { TaskToDoListComponent } from './task-to-do-list/task-to-do-list.component';
import { InputChildComponent } from './input-parent-to-child/input-child.component';
import { OutputChildToParentComponent } from './output-child-to-parent/output-child-to-parent.component';
import { AddTaskComponent } from './task-to-do list-refactoring/add-task/add-task.component';
import { TodoTasksComponent } from './task-to-do list-refactoring/todo-tasks/todo-tasks.component';
import { DoneTaskComponent } from './task-to-do list-refactoring/done-task/done-task.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    NgForComponent,
    NgIfComponent,
    NgSwitchComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    DataBindingTwoWayComponent,
    TaskToDoListComponent,
    InputChildComponent,
    OutputChildToParentComponent,
    AddTaskComponent,
    TodoTasksComponent,
    DoneTaskComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
