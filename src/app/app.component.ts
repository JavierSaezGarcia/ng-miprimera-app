import { Component } from '@angular/core';
// decorador que lleva un selector,una plantilla , un estilo y una clase
@Component({
  selector: 'app-raiz',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'miprimeraApp';
  saludo = "Hola amiguitos";
}
