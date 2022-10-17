import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //styleUrls: ['./empleado.component.css']
  styles:["p{color:brown;}"]
})
export class EmpleadoComponent implements OnInit {
  
  private nombre: string = "Javier";
  private apellido: string = "Saez";
  // dato encapsulado y de la unica forma de acceder es a traves de un metodo o modificador de acceso
  private edad: number = 18;
  empresa: string= "Google";
  // cambiaEmpresa(event:Event)
  // {
  //   this.empresa=(<HTMLInputElement>event.target).value
  // }
  antiguedad: number = 25;
  
  // sirve para acceder desde fuera del archivo una variable edad sin poder modificarla
  getNombre(){
    return this.nombre; 
  }
  getApellido(){
    return this.apellido;
  }
  getEdad(){
    return this.edad;
  }
  // Si lo hacemos por boton seria a traves de una funcion que llama el boton
  // llamaEmpresa(value:string){

  // }

  disableInput = false;
  usuRegistrado = false;
  textoDeRegistro = "";

  getRegistroUsuario(){
    this.usuRegistrado= false;   
    
  }
  setUsuarioRegistrado(event:Event){
    //alert("El usuario se acaba de registrar")
    // this.textoDeRegistro="El usuario se acaba de registrar";
    // alert(event.target)
    if ((<HTMLInputElement>event.target).value=="si")
    {
      this.textoDeRegistro="El usuario se acaba de registrar";
    }
    else
    {
      this.textoDeRegistro="No hay nadie registrado";
    }

  }
  
  
  

  ngOnInit(): void {
    
  }

}
