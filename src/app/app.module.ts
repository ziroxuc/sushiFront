


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//servicios
import { ProductosService } from './services/productos.service';
import { CarritoCompraService } from './services/carrito-compra.service';

//router
import { APP_ROUTING } from './app.routes';

//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

import { FooterComponent } from './components/shared/footer/footer.component';
import { PromocionesComponent } from './components/promociones/promociones.component';
import { MenuComponent } from './components/menu/menu.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { CarroComprasComponent } from './components/carro-compras/carro-compras.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    PromocionesComponent,
    MenuComponent,
    SidebarComponent,
    CarroComprasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    APP_ROUTING,
    NgbModule.forRoot()
  ],
  providers: [ProductosService,CarritoCompraService],
  bootstrap: [AppComponent]
})
export class AppModule { }
