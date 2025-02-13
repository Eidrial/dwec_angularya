import { Component } from '@angular/core';

//componente padre
//anotaciones
@Component({
  selector: 'app-root', //nombre del componente
  templateUrl: './app.component.html', //url del componente
  standalone: false,
  styleUrl: './app.component.css' //hoja de estilos del componente
})
export class AppComponent {
  title = 'proyecto001';

  //variable booleana
  nombre: string = 'Azahara';

  //variable booleana
  fumador = false;

  //variable numerica
  edad = 30;

  //array
  notas: number[] = [8.1, 5.6, 3.2];
  //notas: Array<number> = [8.1,5.6,3.2];

  //contador, aumentar y decrementar
  contador = 0;
  incrementarContador() {
    this.contador++;
  }

  decrementarContador() {
    this.contador--;
  }

  //array de objetos para hacer un select
  provincias = [
    { id: 1, nombre: "Huelva" },
    { id: 2, nombre: "Córdoba" },
    { id: 3, nombre: "Jaén" },
    { id: 4, nombre: "Cádiz" }
  ]

  //funcion booleana
  esFumador() {
    return this.fumador ? "Sí fumo" : "No fumo";
  }

  //evento, pulsar boton
  pulsarBoton() {
    alert("Has pulsado el botón.");
  }
}
