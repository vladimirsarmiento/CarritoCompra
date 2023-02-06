import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { SidebarComponent } from './components/sidebar/sidebar.component';
//login
import { LoginComponent } from './components/login/login.component';
//config
import { ConfigComponent } from './components/config/config.component';
//boostrap
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
//ngx
import { NgxTinymceModule } from 'ngx-tinymce';
//products
import { CreateProductoComponent } from './components/productos/create-producto/create-producto.component';
import { IndexProductoComponent } from './components/productos/index-producto/index-producto.component';
import { UpdateProductoComponent } from './components/productos/update-producto/update-producto.component';
import { InventarioProductoComponent } from './components/productos/inventario-producto/inventario-producto.component';
import { VariedadProductoComponent } from './components/productos/variedad-producto/variedad-producto.component';
import { GaleriaProductoComponent } from './components/productos/galeria-producto/galeria-producto.component';
import { ReviewsProductoComponent } from './components/productos/reviews-producto/reviews-producto.component';
//ventas
import { IndexVentasComponent } from './components/ventas/index-ventas/index-ventas.component';
import { DetalleVentasComponent } from './components/ventas/detalle-ventas/detalle-ventas.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LoginComponent,
    CreateProductoComponent,
    IndexProductoComponent,
    UpdateProductoComponent,
    InventarioProductoComponent,
    ConfigComponent,
    VariedadProductoComponent,
    GaleriaProductoComponent,
    ReviewsProductoComponent,
    IndexVentasComponent,
    DetalleVentasComponent,
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
