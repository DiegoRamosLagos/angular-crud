import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoAddComponent } from './producto-add/producto-add.component';
import { ProductoGetComponent } from './producto-get/producto-get.component';
import { ProductoEditarComponent } from './producto-editar/producto-editar.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

@NgModule({
  declarations: [
    AppComponent,
    ProductoAddComponent,
    ProductoGetComponent,
    ProductoEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
