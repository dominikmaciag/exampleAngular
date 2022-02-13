import { ClickService } from './../click.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-click1',
  templateUrl: './click1.component.html',
  styleUrls: ['./click1.component.css'],
})
export class Click1Component implements OnInit {
  constructor(private ClickService: ClickService) {}

  ngOnInit(): void {}

  click = 0;

  add(): void {
    this.click += 1;
    this.ClickService.addClicks();
  }
}
