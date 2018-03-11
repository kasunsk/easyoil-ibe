import { Component, OnInit } from '@angular/core';
import {Product} from "../_model/product";
import {ProductService} from "../_service/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products : Product [];
  loading : boolean;
  orderPlacementUrl : string;

  constructor(private productService : ProductService, private router: Router) { }

  ngOnInit() {
    this.orderPlacementUrl = 'order/place/';
    this.loadAvailableProducts();
  }

  loadAvailableProducts() {
    this.loading = true;
    this.productService.getAll().subscribe(
      data => {
        console.log(data);
        this.products = data;
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
