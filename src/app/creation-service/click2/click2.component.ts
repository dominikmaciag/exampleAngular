import { ClickService } from './../click.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click2',
  templateUrl: './click2.component.html',
  styleUrls: ['./click2.component.css'],
})
export class Click2Component implements OnInit {
  constructor(private ClickService: ClickService) {}
  click = 0;
  ngOnInit(): void {}
  add(): void {
    this.click += 1;
    this.ClickService.addClicks();
  }
}
