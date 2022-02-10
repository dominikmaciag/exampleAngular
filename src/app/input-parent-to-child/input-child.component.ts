import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-child',
  templateUrl: './input-child.component.html',
  styleUrls: ['./input-child.component.css']
})
export class InputChildComponent implements OnInit {

  @Input('childProp')
  childs: any;

  constructor() { }

  ngOnInit(): void {
  }

}
