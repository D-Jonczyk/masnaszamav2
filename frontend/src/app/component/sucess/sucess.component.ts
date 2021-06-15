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
    this.addNewOrder();
  }

  addNewOrder(){

    // console.log(order.orderId);
    // console.log(order.restaurant.restaurantId);
    // console.log(order.payment.paymentId);
    // console.log(order.orderStatus.statusId);
    // console.log(order.customer.personId);

    this.order = '{\n' +
      '    "orderedTime": "2020-01-01 12:12:12",\n' +
      '    "orderPrice": 99,\n' +
      '    "desiredDeliveryTime": "2020-01-01 13:12:12",\n' +
      '    "tip": 2,\n' +
      '    "customerId": {"id": 301 },\n' +
      '    "restaurantId": { "restaurantId": 37 },\n' +
      '    "orderStatus": 1,\n' +
      '    "orderMeals": [\n' +
      '        { "mealId": { "mealId": 500 }, "opinionId": { "opinionId": 100 }},\n' +
      '        { "mealId": { "mealId": 501 }, "opinionId": { "opinionId": 101 }}\n' +
      '    ]\n' +
      '}';
    const order = {
      orderedTime: '2020-01-01 12:12:12',
      orderPrice: 99,
      desiredDeliveryTime: '2020-01-01 13:12:12',
      tip: 2,
      customerId: {id: 301},
      restaurantId: {restaurantId: 37},
      orderStatus: 1,
      orderMeals: [
        { mealId: {mealId: 500 }, opinionId: { opinionId: 100 }},
        { mealId: {mealId: 501 }, opinionId: { opinionId: 101 }}
      ]

    };
    return this.http.put(this.orderUrl, this.order)
      .subscribe(r=>{});
  }
}
