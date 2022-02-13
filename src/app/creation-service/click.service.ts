import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClickService {
  sumClicks = 0;

  addClicks() {
    this.sumClicks += 1;
    console.log(this.sumClicks);
  }

  constructor() {}
}
