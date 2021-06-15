import { Component, OnInit } from '@angular/core';
import {Order} from '../restaurant/model/Order';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-sucess',
  templateUrl: './sucess.component.html',
  styleUrls: ['./sucess.component.css']
})
export class SucessComponent implements OnInit {

  private orderUrl = environment.apiBaseUrl + '/order/createNewOrder';
  order: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  addNewOrder(){

    // console.log(order.orderId);
    // console.log(order.restaurant.restaurantId);
    // console.log(order.payment.paymentId);
    // console.log(order.orderStatus.statusId);
    // console.log(order.customer.personId);

    this.order = 'xx';
    return this.http.put<Order>(this.orderUrl, this.order)
      .subscribe(r=>{});
  }
}
