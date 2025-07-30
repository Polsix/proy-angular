import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'pill-item',
  imports: [CommonModule],
  templateUrl: './mi-tercer-componente.component.html',
  styleUrl: './mi-tercer-componente.component.css'
})
export class MiTercerComponenteComponent {
    @Input() title = '';
    @Input() link = '';
    @Input() discount = '';
}
