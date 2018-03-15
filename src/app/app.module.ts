import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module' ;
import * as svcs from './services';

import { AppComponent } from './app.component';
import { HeatMapComponent } from './components/heat-map/heat-map.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeatMapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    svcs.HeatMapService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
