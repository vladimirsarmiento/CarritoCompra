import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/usuario/perfil/perfil.component';

import { AuthGuard } from "./guards/auth.guard";
import { IndexProductoComponent } from './components/productos/index-producto/index-producto.component';
import { ShowProductoComponent } from "./components/productos/show-producto/show-producto.component";
import { CarritoComponent } from './components/carrito/carrito.component';
import { RegisterComponent } from './components/register/register.component';
import { DireccionesComponent } from './components/usuario/direcciones/direcciones.component';
import { NosotrosComponent } from "./components/nosotros/nosotros.component";
import { OrdenesComponent } from './components/usuario/ordenes/ordenes.component';
import { DetalleOrdenComponent } from './components/usuario/detalle-orden/detalle-orden.component';
import { ShowSofwareComponent } from './components/show-sofware/show-sofware.component';
import { PolPrivacidadComponent } from './components/static/pol-privacidad/pol-privacidad.component';
import { TermCondicionesComponent } from './components/static/term-condiciones/term-condiciones.component';

const appRoute: Routes = [
    {path: '', component: InicioComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registro', component: RegisterComponent},
    {path: 'cuenta/perfil', component: PerfilComponent, canActivate: [AuthGuard]},
    {path: 'cuenta/direcciones', component: DireccionesComponent, canActivate: [AuthGuard]},
    {path: 'cuenta/ordenes', component: OrdenesComponent, canActivate: [AuthGuard]},
    {path: 'cuenta/ordenes/:id', component: DetalleOrdenComponent, canActivate: [AuthGuard]},
    {path: 'carrito-compras', component: CarritoComponent, canActivate: [AuthGuard]},

    {path: 'productos', component: IndexProductoComponent},
    {path: 'productos/:slug', component: ShowProductoComponent},
    {path: 'productos/categoria/:categoria', component: IndexProductoComponent},

    {path: 'software/:slug', component: ShowSofwareComponent, canActivate: [AuthGuard]},

    {path: 'politica-privacidad', component: PolPrivacidadComponent},
    {path: 'terminos-condiciones', component: TermCondicionesComponent},
    {path: 'nosotros', component: NosotrosComponent},

]

export const appRoutingProviders: any [] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoute , {
    scrollPositionRestoration: 'enabled'
});