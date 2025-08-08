import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MiPrimerComponenteComponent } from './mi-primer-componente/mi-primer-componente.component';
import { PanelBotonesComponent } from './panel-botones/panel-botones.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MiPrimerComponenteComponent, PanelBotonesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Menu Principal';
  /*logoAngular = 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg';*/
  logoAngular = 'https://efeverde.com/wp-content/uploads/2022/01/1381571.jpg';
  logoReact = 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg';
}
