import { ProductoGetComponent } from './producto-get/producto-get.component';
import { ProductoEditarComponent } from './producto-editar/producto-editar.component';
import { ProductoAddComponent } from './producto-add/producto-add.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'producto/crear',
    component: ProductoAddComponent
  },
  {
    path: 'editar/:edit',
    component: ProductoEditarComponent
  },
  {
    path: 'productos',
    component: ProductoGetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
