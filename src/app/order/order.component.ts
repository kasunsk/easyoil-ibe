import { Component, OnInit } from '@angular/core';
import {OrderPlace} from "../_model/orderplace";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  order : OrderPlace;

  constructor() { }

  ngOnInit() {
  }

  placeOrder() {
      
  }

}
