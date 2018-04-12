import { Component, OnInit } from '@angular/core';
import { Order } from '../model/order';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Product } from '../model/product';
import { Customer } from '../model/customer';
import { log } from 'util';
import { OrderPlaceResponse } from '../model/orderplaceresponse';
import { OrderResponse } from '../model/orderresponse';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  loading: boolean;
  order: Order;
  orderReference: string;
  productId: number;
  product: Product;
  private sub: any;
  orderPlacementSuccessUrl: string;

  constructor(private router: Router, private route: ActivatedRoute, private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.product = <Product>{};
    this.sub = this.route.params.subscribe(params => {
      this.productId = +params['productId']; // (+) converts string 'id' to a number

      this.httpClient.get(environment.api_url + '/sellitem/load/' + this.productId)
        .subscribe(
          data => {
            const result = <Product>data;
            this.product = result;
          },
          err => {
            console.log('Error occurred');
            this.loading = false;
          });

    });

    this.order = <Order>{customer: <Customer>{}};

    this.order.orderItemId = this.productId;
    this.order.currency = 'Rs';
    this.order.paymentStatus = 'WAITING';
    this.order.paymentType = 'CASH';

    this.orderPlacementSuccessUrl = 'order/load/';
  }

  placeOrder() {
    this.loading = true;
    return this.httpClient.post(environment.api_url + '/order/place', this.order)
      .subscribe(
        data => {
          const result = <OrderResponse>data;
          this.orderReference = result.orderReference;
          this.loading = false;
          this.router.navigate([this.orderPlacementSuccessUrl + this.orderReference]);
        },
        err => {
          console.log(err);
          console.log('Error occurred');
          this.loading = false;
        });
  }

}
