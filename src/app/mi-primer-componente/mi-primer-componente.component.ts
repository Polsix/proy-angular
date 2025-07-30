import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'c1',
  template: '<button (click)="incrementarContador()">Dale click: {{contador + valorEstatico}}</button>',
  styleUrl: './mi-primer-componente.component.css'
})
export class MiPrimerComponenteComponent {
  contador = 1
  valorEstatico = 10;
  @Output() clicked = new EventEmitter<number>();
  incrementarContador() {
     this.contador++;
     this.clicked.emit();
  }

}
