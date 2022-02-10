import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output-child-to-parent',
  templateUrl: './output-child-to-parent.component.html',
  styleUrls: ['./output-child-to-parent.component.css']
})
export class OutputChildToParentComponent implements OnInit {


@Input('toChildProps')
toChilds: any;


@Output()
eventChild = new EventEmitter<string>();


constructor() { }

  ngOnInit(): void {
  }


  select(child: any){
this.eventChild.emit(child);
  }
}
