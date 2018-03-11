import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {OrderPlaceResponse} from "../_model/orderplaceresponse";

@Component({
  selector: 'app-order-response',
  templateUrl: './order-response.component.html',
  styleUrls: ['./order-response.component.css']
})
export class OrderResponseComponent implements OnInit {

  private sub: any;
  orderId: number;
  order: OrderPlaceResponse;
  loading: boolean;

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {
  }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.orderId = +params['orderId']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
    });
  }

  loadOrder() {
    this.loading = true;
    return this.httpClient.post(environment.api_url + '/order/load', this.order)
      .subscribe(
        data => {
          const result = <OrderPlaceResponse>data;
          this.order = result;
          this.loading = false;
        },
        err => {
          console.log("Error occurred");
          this.loading = false;
        })
  }

}
