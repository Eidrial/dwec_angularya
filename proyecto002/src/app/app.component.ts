import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto002';

  //para que los valores de los inputs aparezcan vacíos (0, "", 0)
  art = {
    codigo: 0,
    descripcion: "",
    precio: 0
  }

  //array de objetos
  articulos = [
    { codigo: 1, descripcion: 'papas', precio: 10.55 },
    { codigo: 2, descripcion: 'manzanas', precio: 12.10 },
    { codigo: 3, descripcion: 'melon', precio: 52.30 },
    { codigo: 4, descripcion: 'cebollas', precio: 17 },
    { codigo: 5, descripcion: 'calabaza', precio: 20 },
  ];

  //para comprobar si el array no está vacío
  hayRegistros() {
    return this.articulos.length > 0;
  }

  //borrar articulo por su codigo
  //recorremos el array mientras x sea menor que la longitud del array
  //buscamos si en el array está el codigo que hemos ingresado
  //y lo borra
  borrar(codigo: number) {
    for (let x = 0; x < this.articulos.length; x++)
      if (this.articulos[x].codigo == codigo) {
        this.articulos.splice(x, 1);
        return;
      }
  }

  //primero comprobamos si el condigo introducido es 0, en ese caso nos dará un aviso
  //si no, recorremos el array mientras x sea menor que la longitud del array
  //si el codigo que hemos introducido existe, avisaremos de que ya existe
  //si todo está bien, añadiremos el articulo al array
  //luego reiniciamos los valores para que aparezcan "vacíos"
  agregar() {
    if (this.art.codigo == 0) {
      alert('Debe ingresar un código de articulo distinto a cero');
      return;
    }

    for (let x = 0; x < this.articulos.length; x++)

      if (this.articulos[x].codigo == this.art.codigo) {
        alert('ya existe un articulo con dicho codigo');
        return;
      }

    this.articulos.push(
      {
        codigo: this.art.codigo,
        descripcion: this.art.descripcion,
        precio: this.art.precio
      }
    );

    this.art.codigo = 0;
    this.art.descripcion = "";
    this.art.precio = 0;
  }

  //seleccionamos el articulo con su codigo, descripcion y precio
  //y hacemos que sea el nuevo "default" (en vez de 0, "", 0) y aparezca en los inputs
  seleccionar(art: { codigo: number; descripcion: string; precio: number; }) {
    this.art.codigo = art.codigo;
    this.art.descripcion = art.descripcion;
    this.art.precio = art.precio;
  }

  //recorremos el array mientras x sea menor que la longitud del array
  //buscamos si en el array está el codigo que necesitamos
  //si lo encuentra, modificará los valores por los nuevos que ha puesto el usuario
  //si no, avisará al usuario de que ese código no existe
  modificar() {
    for (let x = 0; x < this.articulos.length; x++)

      if (this.articulos[x].codigo == this.art.codigo) {
        this.articulos[x].descripcion = this.art.descripcion;
        this.articulos[x].precio = this.art.precio;
        return;
      }

    alert('No existe el código de articulo ingresado');
  }


}
