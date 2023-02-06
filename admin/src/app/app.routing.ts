import { Routes, RouterModule, CanActivate } from '@angular/router';
import { ModuleWithProviders } from "@angular/core"
import { AdminGuard } from "./guards/admin.guard";

//login
import { LoginComponent } from './components/login/login.component';
//config
import { ConfigComponent } from './components/config/config.component';
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


const appRoute: Routes = [
    {path: '', redirectTo: 'inicio', pathMatch: 'full'},

    {path: 'panel', children: [
        //products
        {path: 'productos', component: IndexProductoComponent, canActivate: [AdminGuard]},
        {path: 'productos/registro', component: CreateProductoComponent, canActivate: [AdminGuard]},
        {path: 'productos/:id', component: UpdateProductoComponent, canActivate: [AdminGuard]},
        {path: 'productos/inventario/:id', component: InventarioProductoComponent, canActivate: [AdminGuard]},
        {path: 'productos/variedades/:id', component: VariedadProductoComponent, canActivate: [AdminGuard]},
        {path: 'productos/galeria/:id', component: GaleriaProductoComponent, canActivate: [AdminGuard]},
        {path: 'productos/reviews/:id', component: ReviewsProductoComponent, canActivate: [AdminGuard]},
        //ventas
        {path: 'ventas', component: IndexVentasComponent, canActivate: [AdminGuard]},
        {path: 'ventas/:id', component: DetalleVentasComponent, canActivate: [AdminGuard]},
        //config
        {path: 'configuraciones', component: ConfigComponent, canActivate: [AdminGuard]},
    ]},
    //login
    {path: 'login', component: LoginComponent}
]

export const appRoutingProviders: any [] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoute);