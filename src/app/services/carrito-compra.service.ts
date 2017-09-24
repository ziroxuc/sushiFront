import { Injectable } from '@angular/core';
import { IProductos } from './productos.service';
declare var $:any;

@Injectable()
export class CarritoCompraService {

  constructor() { }

  carroCompra: IProductos[] = [];

//metodo que rescata del local storage la cantidad de items en el nav bar
 getCantidadCarro(){

    let cantItems = 0;
    for (let item of this.carroCompra) { 
      cantItems = cantItems + item.cantidad;
    }
    return cantItems;
  }

  addCarrito(sushiObj: IProductos) {

   if (this.carroCompra.length < 1){
        sushiObj.cantidad = 1;
        this.carroCompra.push(sushiObj);
        this.grabarLocalStorge();
        return;
  }
  if (this.carroCompra.length > 0){

    for (let item of this.carroCompra) {    
      if (item.id_sushi == sushiObj.id_sushi) {
        
        item.cantidad++;
        this.grabarLocalStorge();
        return;
      }
    }
    sushiObj.cantidad = 1;
    this.carroCompra.push(sushiObj);
    this.grabarLocalStorge();

    } 
  }

   grabarLocalStorge(){
    sessionStorage.setItem("carro",JSON.stringify(this.carroCompra));
   // sessionStorage.setItem("cantEnCarro", this.cantidadItems.toString());
  }

  cargarLocalStorage(){
    if (sessionStorage.getItem("carro")){
      this.carroCompra = JSON.parse(sessionStorage.getItem("carro"));

    }
  
  return this.carroCompra;
  }

  getSumaTotal(): number {
    let precioTotal: number = 0;
    if (this.carroCompra.length > 0) {

      for (let item of this.carroCompra) {

        precioTotal = (item.precio * item.cantidad) + precioTotal;
      }
      return precioTotal;
    } else {
      return 0;
    }

  }

  deleteCarrito(id: number, sushiObj: IProductos) {

      this.carroCompra.splice(id, 1);
      sushiObj.cantidad = 0;
      this.grabarLocalStorge();
  }

  agregaOrestaItem(suma:boolean,sushiObj:IProductos){

  if(suma == true && sushiObj.cantidad > 0){
    
      sushiObj.cantidad++;
      this.grabarLocalStorge();
    }
    
    if(suma == false){
      if(sushiObj.cantidad > 1){
         sushiObj.cantidad--;
         this.grabarLocalStorge();
      }

    }

  }

  generarPedido(obj:IProductos,sumaTotal:number){

    console.log(obj);
    console.log(sumaTotal);
  }
}



