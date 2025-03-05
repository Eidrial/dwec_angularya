import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { IProducto } from '../i-producto';

@Component({
  selector: 'app-listadoproducto',
  standalone: false,
  templateUrl: './listadoproducto.component.html',
  styleUrl: './listadoproducto.component.css'
})
export class ListadoproductoComponent implements OnInit {

  //productos: any;

  //productos es un array de las variables de la interface
  productos!:IProducto[];

  //inyectar servicio
  constructor(private servicioproductos: ProductosService) { }

  ngOnInit(): void {
    this.servicioproductos.obtenerTodos().subscribe(
      //recuperar información que llega de la api
      (datos) => {
        this.productos = datos;
        console.log(this.productos);
      }
    );
  }

}
