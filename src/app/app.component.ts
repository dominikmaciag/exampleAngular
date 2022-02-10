import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exampleAngular';

  childList = ['Angular', 'Java'];


  selected(task: string): void{
console.log(task);
  }

}
