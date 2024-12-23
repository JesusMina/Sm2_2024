import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClient, HttpClientModule} from "@angular/common/http";
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DetallesComponent } from './detalles/detalles.component';

@NgModule({
  declarations: [AppComponent, DetallesComponent],
  imports: [
    BrowserModule,
    IonicModule,
    IonicModule.forRoot(), 
    AppRoutingModule, 
    HttpClientModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
