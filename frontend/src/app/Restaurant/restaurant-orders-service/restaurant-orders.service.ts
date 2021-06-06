import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RestaurantOrders} from '../model/restaurant-orders.model';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestaurantOrdersService {

  private restaurantOrdersUrl = environment.apiBaseUrl + '/order/getbyRestaurantId?restaurantId=';

  constructor(
    private http: HttpClient) {
  }

  getOrders(id) {
    return this.http.get<RestaurantOrders[]>(this.restaurantOrdersUrl + id.toString());
  }

}
