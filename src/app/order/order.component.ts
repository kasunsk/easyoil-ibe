import { Component, OnInit } from '@angular/core';
import {Order} from "../_model/order";
import {OrderService} from "../_service/order.service";
import {Router} from "@angular/router";
import {OrderPlaceResponse} from "../_model/orderplaceresponse";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  loading : boolean;
  order : Order;
  orderId : number;
  orderPlacementSuccessUrl : string;

  constructor(private router:Router, private httpClient: HttpClient) { }

  ngOnInit() {
    this.orderPlacementSuccessUrl = 'order/load';
  }

  placeOrder() {
    this.loading=true;
    return this.httpClient.post(environment.api_url + '/order/place', this.order)
      .subscribe(
        data => {
          const result = <number>data;
          this.orderId = result;
          this.loading=false;
          this.router.navigate([this.orderPlacementSuccessUrl + this.orderId])
        },
        err => {
          console.log("Error occurred");
          this.loading=false;
        })
  }

}
