import {Customer} from "./customer";

export class OrderPlace {
  id:number;
  customer:Customer;
  orderItemId:number;
  amount:number;
  price:number;
  currency:string;
  paymentType:string;
  paymentStatus:string;
}
