import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RestaurantOrders} from '../model/restaurant-orders.model';
import {environment} from '../../../../environments/environment';
import {UserService} from '../../../service';
import {Observable} from 'rxjs';
import {Order} from '../model/Order';
import {RestaurantOrdersComponent} from '../restaurant-orders/restaurant-orders.component';

@Injectable({
  providedIn: 'root'
})
export class RestaurantOrdersService {

  private restaurantOrdersUrl: string = environment.apiBaseUrl + '/order/getbyRestaurantId?restaurantId=';
  private employeesRestaurantIdUrl: string = environment.apiBaseUrl + '/employee/getRestaurantId?employeeId=';
  private setOrderStatusUrl: string = environment.apiBaseUrl + '/order/setStatusToFinished?orderId='
  employeeId: number;
  restId: number;
  restaurantOrders$: Observable<RestaurantOrders[]>;
  // restaurantOrders: RestaurantOrders[] = [];

  constructor(
    private http: HttpClient,
    private userService: UserService) {
  }

  setDone(id) {
    this.http.get<Order>(this.setOrderStatusUrl + id.toString());
  }
}
  // getOrders(id) {
  //   return this.http.get<RestaurantOrders[]>(this.restaurantOrdersUrl + id);
  // }

  // getRestaurantId(): Promise<number> {
  // this.employeeId = this.userService.currentUser.id;
  // console.log(this.employeeId);
  // console.log(this.employeesRestaurantIdUrl + this.employeeId);
  // this.http.get<number>(this.employeesRestaurantIdUrl + this.employeeId)
  //   .subscribe(id => { console.log('service id: ' + id); this.restId = id});
  //
  // console.log('service rest id: ' + this.restId);

  // this.http.get<number>(this.employeesRestaurantIdUrl + this.employeeId)
  //  .toPromise().then()

  // return this.restId;
  // }
  // getOrders(): Observable<RestaurantOrders[]> {
  //   const employeeId = this.userService.currentUser.id;
  //   this.http.get(this.employeesRestaurantIdUrl + employeeId).subscribe(empId => {
  //     return this.http.get<RestaurantOrders[]>(this.restaurantOrdersUrl + empId)
  //   });
        // .subscribe
        // (results => {
        //   results = results.reduce((acc, {orderId, name}) => {
        //     const existing = acc.find(i => i.orderId === orderId)
        //     if (existing) {
        //       existing.name.push(name)
        //     } else {
        //       acc.push({orderId, name: [name]})
        //     }
        //
        //     return acc
        //   }, [])
        //   // this.restaurantOrders = results;
        //   // console.log(this.restaurantOrders.length);
        //   return results;
        // });
 // }

