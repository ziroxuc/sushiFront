import { Injectable } from '@angular/core';
import { IProductos } from './productos.service';
declare var $:any;

@Injectable()
export class CarritoCompraService {

  constructor() { }

  carroCompra: IProductos[] = [];
  cantidadItems:number = 0;

//metodo que modifica la cantidad de carrito de compra del nav bar (numero rojo)
  modificaCantidad(){
    let cont:number = 0;
    for (let item of this.carroCompra) {
      cont = cont + item.cantidad;
    }
    this.cantidadItems = cont;
  }

//metodo que rescata del local storage la cantidad de items en el nav bar
  getCantidadCarro(){
     if (sessionStorage.getItem("cantEnCarro")){
      this.cantidadItems = parseInt(sessionStorage.getItem("cantEnCarro"));
    }
    return this.cantidadItems;
  }

  addCarrito(sushiObj: IProductos) {

    for (let item of this.carroCompra) {
      if (item.id_sushi == sushiObj.id_sushi) {
        
        item.cantidad++;
        this.cantidadItems++;
        this.grabarLocalStorge();
         $('#ModalDetalle').modal('hide');
        return;
      }
    }
    this.carroCompra.push(sushiObj);
    this.cantidadItems++;
    this.grabarLocalStorge();
    $('#ModalDetalle').modal('hide');
    
  }

   grabarLocalStorge(){
    sessionStorage.setItem("carro",JSON.stringify(this.carroCompra));
    sessionStorage.setItem("cantEnCarro", this.cantidadItems.toString());
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
      sushiObj.cantidad = 1;
      this.modificaCantidad();
      this.grabarLocalStorge();
  }

  agregaOrestaItem(suma:boolean,sushiObj:IProductos){

  if(suma == true && sushiObj.cantidad > 0){
    
      sushiObj.cantidad++;
      this.cantidadItems++;
      
      this.grabarLocalStorge();
    }
    
    if(suma == false){
      if(sushiObj.cantidad > 1){
         sushiObj.cantidad--;
         this.cantidadItems--;
         
         this.grabarLocalStorge();
      }

    }

  }

  generarPedido(obj:IProductos,sumaTotal:number){

    console.log(obj);
    console.log(sumaTotal);
  }
}



