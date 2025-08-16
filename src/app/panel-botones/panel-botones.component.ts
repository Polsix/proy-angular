import { Component, Input } from '@angular/core';
import { MiPrimerComponenteComponent } from '../mi-primer-componente/mi-primer-componente.component';
import { MiTercerComponenteComponent } from '../mi-tercer-componente/mi-tercer-componente.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-panel-botones',
  imports: [MiPrimerComponenteComponent, FormsModule, MiTercerComponenteComponent],
  templateUrl: './panel-botones.component.html',
  styleUrl: './panel-botones.component.css'
})
export class PanelBotonesComponent {
  @Input() imageUrl: string = 'https://lizallegraart.com/wp-content/uploads/2024/10/Arte-Contemporaneo-Que-Es-1.png';
  valorInput = "";

  limpiarCajaTexto() {
    alert('Limpiando caja de texto: ' + this.valorInput)
    this.valorInput = '';
  }

  botonPresionado(event: number) {
    this.valorInput = event.toString();
  }
}
