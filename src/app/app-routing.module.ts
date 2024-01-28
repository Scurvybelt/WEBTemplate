import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';

const routes: Routes = [
  {path:'',component:InicioComponent},
  {path:'login',component:LoginComponent},
  {path:'inicio',component: InicioComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'productos',component: ProductosComponent},
  {path:'nosotros',component: NosotrosComponent},
  {path:'servicios',component: ServiciosComponent},


  {path: '**',component: NoEncontradoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
