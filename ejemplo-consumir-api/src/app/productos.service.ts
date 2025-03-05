import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//la práctica correcta es crear una constante para guadar la url de la api que usaremos
const URL_BASE = "https://ejerciciostutorialesya.com/vue/datos.php";

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  //es como si tuviesemos la propiedad creada arriba, pero en este caso la estamos creando desde el constructor directamente
  constructor(private httpclient: HttpClient) { }

  //implemetar los métodos que necesitamos para:

  // - rescatar todos los productos
  obtenerTodos() {
    //el get devuelve un objeto llamado 'Observable', es el que permite la conexion asincrona
    //mejor no tocar el <any>, por lo que pueda devolver la api y así siempre esté asegurado que vaya salir correctamente
    return this.httpclient.get<any>(`${URL_BASE}`); //necesario escribirlo así por si usasemos una api que permite filtrado y cosas por el estilo, para así poder concatenar
  }

  // - rescatar un producto con un determinado id
  // - actualizar ..
  // - eliminar ..
  //en general, todo lo que necesitemos !



}
