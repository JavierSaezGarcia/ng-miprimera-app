import { Component } from "@angular/core";

// Creamos el decorador
@Component({
    selector: 'app-empleados',
    templateUrl: './empleados.component.html',
    styleUrls: ['./empleados.component.css']
})

// construimos la clase para que sea accesible desde fuera desde este archivo
export class EmpleadosComponent{
    insultoCliente = "Que te follen";


}