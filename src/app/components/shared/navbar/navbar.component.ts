import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoCompraService } from './../../../services/carrito-compra.service';
import { IProductos } from './../../../services/productos.service';
declare var $:any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
  
})
export class NavbarComponent {

  nombreApp:string = "Sushi App";

  productsAdded:IProductos[] = this.ccService.cargarLocalStorage(); 

  constructor(private router:Router, private ccService:CarritoCompraService) { }

  openModalOrdenPedido() {
    $('#ModalOrdenPedido').modal('show');
  }

}
