import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Dog } from '../app.component';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.css'],
})
export class LifecycleHooksComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input('textProp')
  inputText!: string;

  @Input('dogProp')
  inputDog!: Dog;
  show: true = true;

  constructor() {}

  /**
Uruchamia się na początku przed ngOnInit,
sprawdza czy się zmieniły zbindowane pola komponentu,
musi zmieniać się referencja
*/

  ngOnChanges(changes: SimpleChanges): void {
    console.log(
      'ngOnChanges - uruchomienie! - #1 - sprawdza czy się zmieniły zbindowane pola komponentu'
    );
    console.log(changes);
  }

  /**
Uruchamia się jeden raz podcza inicjalizacji komponent
Uruchomi się po konstruktorze i po ngOnChange
NAJCZĘŚCIEJ UŻYWANE
*/

  ngOnInit(): void {
    console.log(
      'ngOnInit - uruchomione! - #2 - Uruchamia się jeden raz podcza inicjalizacji komponent'
    );
    this.inputDog.name = 'Inne imię';
  }

  /**
   * Uruchamia się przy każdej zmianie, wywołaniu eventu etc.
   */

  ngDoCheck(): void {
    console.log(
      'ngDoCheck - uruchomione! - #3 - Uruchamia się przy każdej zmianie, wywołaniu eventu etc.'
    );
  }

  /**
   * Uruchamia się po inicjalizacji np <ng-content>
   */
  ngAfterContentInit(): void {
    console.log(
      'ngAfterContentInit - uruchomione! - #4 - Uruchamia się po inicjalizacji np <ng-content>'
    );
  }

  /**
   * Uruchamia się po każdej zmianie np <ng-content>
   */
  ngAfterContentChecked(): void {
    console.log(
      'ngAfterContentChecked - uruchomione! - #5 - Uruchamia się po każdej zmianie np <ng-content>'
    );
  }

  /**
   *  Uruchamia się po inicjalizacji widoku
   */
  ngAfterViewInit(): void {
    console.log(
      'ngAfterViewInit - uruchomione! - #6 - Uruchamia się po inicjalizacji widoku'
    );
  }

  /**
   *  Uruchamia się po każdej zmianie widoku
   */
  ngAfterViewChecked(): void {
    console.log(
      'ngAfterViewChecked - uruchomione! - #7 - Uruchamia się po każdej zmianie widoku'
    );
  }

  /**
   *  Uruchamia się wtedy jak nasz komponent ulegnie zniszczeniu
   */
  ngOnDestroy(): void {
    console.log(
      'ngOnDestroy - uruchomione! - #8 - Uruchamia się wtedy jak nasz komponent ulegnie zniszczeniu'
    );
  }
}
