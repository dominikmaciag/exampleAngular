import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-reference',
  templateUrl: './local-reference.component.html',
  styleUrls: ['./local-reference.component.css'],
})
export class LocalReferenceComponent implements OnInit {
  constructor() {}

  @Input('viewsProp')
  list: any;

  ngOnInit(): void {}
}
