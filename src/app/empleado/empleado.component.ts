import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //styleUrls: ['./empleado.component.css']
  styles:["p{color:brown;}"]
})
export class EmpleadoComponent implements OnInit {
  
  nombre: string = "Javier";
  apellido: string = "Saez";
  private edad: number = 18;
  empresa: string= "Capgemini";
  antiguedad: number = 25;
  
  // sirve para acceder desde fuera del archivo una variable edad sin poder modificarla
  getEdad(){
    return this.edad;
  }

  ngOnInit(): void {
  }

}
