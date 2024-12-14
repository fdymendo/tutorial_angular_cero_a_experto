import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h3>{{ contador }}</h3>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="decreaseBy(1)">-1</button>
    <button (click)="reset()">Reiniciar</button>`,
})
export class CounterComponent {
  public title: string = 'main';
  public contador: number = 0;

  increaseBy(valor: number) {
    this.contador += valor;
  }
  decreaseBy(valor: number) {
    this.contador -= valor;
  }
  reset() {
    this.contador = 0;
  }
}
