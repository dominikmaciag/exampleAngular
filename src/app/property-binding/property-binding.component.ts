import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css'],
})
export class PropertyBindingComponent {
  inputText = 'Tekst';
  maxLengt = 5;
  colorClass = 'color';
  logoUrl = '';

  isDisable = true;

  constructor() {
    setTimeout(() => {
      this.isDisable = false;
    }, 3000);
  }

  change() {
    this.inputText = 'Zmiana tekstu i koloru';
    this.maxLengt = 10;
    this.colorClass = 'color2';
    this.logoUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';
  }
}
