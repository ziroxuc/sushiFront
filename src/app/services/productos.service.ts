import { IProductos } from './productos.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductosService {


  private productos: IProductos[] = [];
  
  constructor(private http:Http) { 

    this.getAllProductos();

  }

  getAllProductos(){
 let url:string = "http://localhost/sushirest/index.php/Productos/getProductos";
 return this.http.get( url )
 .map( resp => {

    this.productos = resp.json().productos;
    return this.productos;

 }).subscribe(data =>{

     
 });

}
  
}

export class ProductosClass{

  id_sushi: number;
  nombre: string;
  precio: number;
  piezas:number;
  descripcion: string;
  img: string;
  create_date:Date;
  mod_date:Date;
  estado:number;
  

}

export interface IProductos {
  id_sushi: number;
  nombre: string;
  precio: number;
  piezas:number,
  descripcion: string;
  img: string;
  create_date:Date,
  mod_date:Date,
  estado:number,
  cantidad:number;
}
