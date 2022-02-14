import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClickService {
  sumClicks = 0;

  // RXJS
  private sum = new Subject<number>();

  addClicks() {
    this.sumClicks += 1;
    console.log(this.sumClicks);

    // RXJS
    this.sum.next(this.sumClicks);
  }

  getSum(): Observable<number> {
    return this.sum.asObservable();
  }
}
