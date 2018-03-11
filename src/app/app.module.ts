import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {HttpModule} from "@angular/http";
import {AppRoutingModule} from "./app.routing";
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { HeaderComponent } from './header/header.component';
import { OrderComponent } from './order/order.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { OrderResponseComponent } from './order-response/order-response.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    OrderComponent,
    OrderResponseComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    // ReactiveFormsModule,
    NgIdleKeepaliveModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent, HomeComponent]
})
export class AppModule { }
