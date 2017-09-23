import { Component } from '@angular/core';
import { CarritoCompraService } from './../../services/carrito-compra.service';
import { IProductos } from './../../services/productos.service';
//import { NgForm, Validator, Validators } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
//import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
declare var $:any;

@Component({
  selector: 'app-carro-compras',
  templateUrl: './carro-compras.component.html',
  styleUrls: ['./carro-compras.component.css']
})
export class CarroComprasComponent{

  forma:FormGroup;

 constructor(private ccService:CarritoCompraService) { 

  this.forma = new FormGroup({
    'nombre':new FormControl('', Validators.required),
    'correo':new FormControl('', [Validators.required, Validators.pattern("^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$")]),
    'direccion':new FormControl('', Validators.required),
    'telefono':new FormControl('', Validators.required),
    'observacion':new FormControl('', Validators.required)


  });

  }
  productsAdded:IProductos[] = this.ccService.cargarLocalStorage(); 
   
   openModalOrdenPedido() {
    $('#ModalOrdenPedido').modal('show');
  }

openModalDatosUsuario(){

  $('#ModalOrdenPedido').modal('hide');
  $('#ModalDatosCliente').modal('show');

}

guardarDatosUser(){

  console.log(this.forma.value);
  console.log(this.forma.valid);
  
}


}
