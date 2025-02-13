import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//hay cosas en angular que necesitaran X módulos, estos módulos habrá que importarlos aquí, como este de FormsModule (importado por mí)
import { FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //aqui se añade el modulo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
