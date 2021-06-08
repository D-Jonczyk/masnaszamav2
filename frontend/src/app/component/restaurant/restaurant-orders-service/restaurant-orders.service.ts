import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RestaurantOrders} from '../model/restaurant-orders.model';
import {environment} from '../../../../environments/environment';
import {UserService} from '../../../service';

@Injectable({
  providedIn: 'root'
})
export class RestaurantOrdersService {

  private restaurantOrdersUrl = environment.apiBaseUrl + '/order/getbyRestaurantId?restaurantId=';
  private employeesRestaurantIdUrl = environment.apiBaseUrl + '/employee/getRestaurantId=';

  constructor(
    private http: HttpClient,
    private userService: UserService) {
  }

  getOrders(id) {
    return this.http.get<RestaurantOrders[]>(this.restaurantOrdersUrl + id.toString());
  }

  getRestaurantId() {
    const employeeId = this.userService.currentUser.id;
    return this.http.get<number>(this.employeesRestaurantIdUrl + employeeId.toString());
  }

}
