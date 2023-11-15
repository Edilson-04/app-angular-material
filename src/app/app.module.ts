import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirectivasPipesComponent } from './ejemplos/directivas-pipes/directivas-pipes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AmDemoComponent } from './ejemplos/am-demo/am-demo.component';
import { PrincipalComponent } from './ejemplos/principal/principal.component';
import { PaginaErrorComponent } from './ejemplos/pagina-error/pagina-error.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivasPipesComponent,
    AmDemoComponent,
    PrincipalComponent,
    PaginaErrorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
