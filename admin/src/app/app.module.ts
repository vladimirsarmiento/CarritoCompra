import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { InicioComponent } from './components/inicio/inicio.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { IndexClienteComponent } from './components/clientes/index-cliente/index-cliente.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateClienteComponent } from './components/clientes/create-cliente/create-cliente.component';
import { EditClienteComponent } from './components/clientes/edit-cliente/edit-cliente.component';
import { CreateProductoComponent } from './components/productos/create-producto/create-producto.component';
import { NgxTinymceModule } from 'ngx-tinymce';
import { IndexProductoComponent } from './components/productos/index-producto/index-producto.component';
import { UpdateProductoComponent } from './components/productos/update-producto/update-producto.component';
import { InventarioProductoComponent } from './components/productos/inventario-producto/inventario-producto.component';
import { CreateCuponComponent } from './components/cupones/create-cupon/create-cupon.component';
import { IndexCuponComponent } from './components/cupones/index-cupon/index-cupon.component';
import { UpdateCuponComponent } from './components/cupones/update-cupon/update-cupon.component';
import { ConfigComponent } from './components/config/config.component';
import { VariedadProductoComponent } from './components/productos/variedad-producto/variedad-producto.component';
import { GaleriaProductoComponent } from './components/productos/galeria-producto/galeria-producto.component';

import { CreateDescuentoComponent } from './components/descuento/create-descuento/create-descuento.component';
import { EditDescuentoComponent } from './components/descuento/edit-descuento/edit-descuento.component';
import { IndexDescuentoComponent } from './components/descuento/index-descuento/index-descuento.component';
import { IndexContactoComponent } from './components/contacto/index-contacto/index-contacto.component';
import { ReviewsProductoComponent } from './components/productos/reviews-producto/reviews-producto.component';
import { IndexVentasComponent } from './components/ventas/index-ventas/index-ventas.component';
import { DetalleVentasComponent } from './components/ventas/detalle-ventas/detalle-ventas.component';
/*import { VentasSofwareComponent } from './components/ventas-sofware/ventas-sofware.component';*/
import { DetalleVentasSofwareComponent } from './components/detalle-ventas-sofware/detalle-ventas-sofware.component';
import { IndexCuentasComponent } from './components/cuentas/index-cuentas/index-cuentas.component';
import { CreateCuentasComponent } from './components/cuentas/create-cuentas/create-cuentas.component';
import { EditCuentasComponent } from './components/cuentas/edit-cuentas/edit-cuentas.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SidebarComponent,
    LoginComponent,
    IndexClienteComponent,
    CreateClienteComponent,
    EditClienteComponent,
    CreateProductoComponent,
    IndexProductoComponent,
    UpdateProductoComponent,
    InventarioProductoComponent,
    CreateCuponComponent,
    IndexCuponComponent,
    UpdateCuponComponent,
    ConfigComponent,
    VariedadProductoComponent,
    GaleriaProductoComponent,
    CreateDescuentoComponent,
    EditDescuentoComponent,
    IndexDescuentoComponent,
    IndexContactoComponent,
    ReviewsProductoComponent,
    IndexVentasComponent,
    DetalleVentasComponent,
    DetalleVentasSofwareComponent,
    IndexCuentasComponent,
    CreateCuentasComponent,
    EditCuentasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbPaginationModule,
    routing,
    NgxTinymceModule.forRoot({
      baseURL: '../assets/tinymce/'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
