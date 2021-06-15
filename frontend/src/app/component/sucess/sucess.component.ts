import { Component, OnInit } from '@angular/core';
import {Order} from '../restaurant/model/Order';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {RestaurantMenuService} from '../restaurant/restaurant-menu-service/restaurant-menu.service';
import {Meal} from '../restaurant/model/meal.model';

@Component({
  selector: 'app-sucess',
  templateUrl: './sucess.component.html',
  styleUrls: ['./sucess.component.css']
})
export class SucessComponent implements OnInit {

  private orderUrl = environment.apiBaseUrl + '/order/createNewOrder';
  order: string;
  total: number;
  meal: Meal[];

  constructor(private http: HttpClient,
              private restaurantMenuService: RestaurantMenuService) {
    this.total = 0;
    this.meal = this.restaurantMenuService.orderMeals;
    console.log(this.meal);
  }

  ngOnInit(): void {
    this.addNewOrder();
  }

  addNewOrder(){

    // console.log(order.orderId);
    // console.log(order.restaurant.restaurantId);
    // console.log(order.payment.paymentId);
    // console.log(order.orderStatus.statusId);
    // console.log(order.customer.personId);

      const currentDate = new Date();
      const order = {
        addressId: {addressId: 12},
      orderedTime: currentDate,
      orderPrice: 71.03,
      desiredDeliveryTime: '2021-06-15 19:22:12',
      tip: 0,
      customerId: {id: 650},
      restaurantId: {restaurantId: 44},
      orderStatus: 1,
      orderMeals: [
        { mealId: {mealId: 190 }, opinionId: { opinionId: 100 }},
        { mealId: {mealId: 57 }, opinionId: { opinionId: 101 }}
      ]
    };
    return this.http.put(this.orderUrl, order)
      .subscribe(r=>{});
  }
}
