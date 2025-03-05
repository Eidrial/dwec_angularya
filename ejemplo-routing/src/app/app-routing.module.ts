import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListadoproductosComponent } from './listadoproductos/listadoproductos.component';
import { ListadoclientesComponent } from './listadoclientes/listadoclientes.component';
import { Pagina404Component } from './pagina404/pagina404.component';

const routes: Routes = [
  //esto sirve para que te rediriga automaticamente a la ruta indicada cuando no haya ruta... (en este caso será a 'home', o sea, cuando la pagina cargue, te llevará ahí directamente)
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  //rutas para usar en la url y en los enlaces
  { path: 'home', component: HomeComponent },
  { path: 'listadoproductos', component: ListadoproductosComponent },
  { path: 'listadoclientes', component: ListadoclientesComponent },
  
  //para que aparezca la pagina de error en el caso de buscar un componente (pagina) que no exista
  { path: '**', component: Pagina404Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
