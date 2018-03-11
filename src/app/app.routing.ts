import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {HomeComponent} from "./home/home.component";
import {OrderComponent} from "./order/order.component";
import {OrderResponseComponent} from "./order-response/order-response.component";


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'order/place/:productId', component: OrderComponent},
  {path: 'order/load/:orderId', component: OrderResponseComponent},
  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
