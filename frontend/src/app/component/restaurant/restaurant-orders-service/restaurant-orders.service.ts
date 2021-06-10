import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RestaurantOrders} from '../model/restaurant-orders.model';
import {environment} from '../../../../environments/environment';
import {UserService} from '../../../service';

@Injectable({
  providedIn: 'root'
})
export class RestaurantOrdersService {

  private restaurantOrdersUrl: string = environment.apiBaseUrl + '/order/getbyRestaurantId?restaurantId=';
  private employeesRestaurantIdUrl: string = environment.apiBaseUrl + '/employee/getRestaurantId?employeeId=';
  employeeId: number;
  restId: number;
  constructor(
    private http: HttpClient,
    private userService: UserService) {
  }

  getOrders(id) {
    return this.http.get<RestaurantOrders[]>(this.restaurantOrdersUrl + id);
  }

  //getRestaurantId(): Promise<number> {
    //this.employeeId = this.userService.currentUser.id;
    // console.log(this.employeeId);
    // console.log(this.employeesRestaurantIdUrl + this.employeeId);
    // this.http.get<number>(this.employeesRestaurantIdUrl + this.employeeId)
    //   .subscribe(id => { console.log('service id: ' + id); this.restId = id});
    //
    // console.log('service rest id: ' + this.restId);

    //this.http.get<number>(this.employeesRestaurantIdUrl + this.employeeId)
    //  .toPromise().then()

    //return this.restId;
  //}



}
