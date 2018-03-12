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
  orderReference: string;
  order: OrderPlaceResponse;
  loading: boolean;

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {
  }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.orderReference = params['reference'];

      this.loading = true;
      return this.httpClient.get(environment.api_url + '/order/load/' + this.orderReference)
        .subscribe(
          data => {
            const result = <OrderPlaceResponse>data;
            this.order = result;
            this.loading = false;
          },
          err => {
            console.log(err);
            console.log("Error occurred");
            this.loading = false;
          })
    });
  }

}
