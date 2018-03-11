import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {HttpModule} from "@angular/http";
import {AppRoutingModule} from "./app.routing";
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import {ProductService} from "./_service/product.service";
import { HeaderComponent } from './header/header.component';
import { OrderComponent } from './order/order.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    // ReactiveFormsModule,
    NgIdleKeepaliveModule.forRoot()
  ],
  providers: [ProductService],
  bootstrap: [AppComponent, HomeComponent]
})
export class AppModule { }
