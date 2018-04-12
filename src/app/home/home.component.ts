import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Product [];
  loading: boolean;
  orderPlacementUrl: string;

  constructor(private router: Router, private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.orderPlacementUrl = 'order/place/';
    this.loadAvailableProducts();
  }

  loadAvailableProducts() {
    this.loading = true;
    this.httpClient.get(environment.api_url + '/product/list').subscribe(
      data => {
        const result = <Product[]>data;
        this.products = result;
        this.loading = false;
      },
      error => {
        this.loading = false;
      });
  }

  orderNow(productId) {
    this.router.navigate([this.orderPlacementUrl + productId]);
  }

}
