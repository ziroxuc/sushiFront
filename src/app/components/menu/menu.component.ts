import { Component } from '@angular/core';
import { ProductosService, IProductos } from './../../services/productos.service';
import { CarritoCompraService } from './../../services/carrito-compra.service';

declare var $:any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {


  constructor(private productosService:ProductosService,private ccService:CarritoCompraService) { 

    
  }

  item:IProductos;

}
