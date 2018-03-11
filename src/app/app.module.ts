import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {HttpModule} from "@angular/http";
import {AppRoutingModule} from "./app.routing";
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import {ProductService} from "./_service/product.service";
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    NgIdleKeepaliveModule.forRoot()
  ],
  providers: [ProductService],
  bootstrap: [AppComponent, HomeComponent]
})
export class AppModule { }
