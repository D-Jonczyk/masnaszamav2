import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {RestaurantOrders} from '../model/restaurant-orders.model';
import {RestaurantOrdersService} from '../restaurant-orders-service/restaurant-orders.service';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import {UserService} from '../../../service';
import {environment} from '../../../../environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Order} from '../model/Order';

@Component({
  selector: 'app-restaurant-orders',
  templateUrl: './restaurant-orders.component.html',
  styleUrls: ['./restaurant-orders.component.css']
})
export class RestaurantOrdersComponent implements OnInit {

  private restaurantOrdersUrl: string = environment.apiBaseUrl + '/order/getbyRestaurantId?restaurantId=';
  private employeesRestaurantIdUrl: string = environment.apiBaseUrl + '/employee/getRestaurantId?employeeId=';
  private setOrderStatusUrl: string = environment.apiBaseUrl + '/order/setStatusToFinished?orderId='
  restaurantOrders$: Observable<RestaurantOrders[]>;
  myMap: Map<number, number>;
  restId: number;
  employeeId: number;

  constructor(private restaurantOrdersService: RestaurantOrdersService,
              public library: FaIconLibrary,
              private userService: UserService,
              private http: HttpClient) {
    library.addIcons(faCheck);
  }

  restaurantOrders: RestaurantOrders[] = [];

  ngOnInit(): void {
    this.getOrders();
    // this.restaurantOrders = this.restaurantOrdersService.getOrders();
    // this.getOrders();
    // this.getOrders();
    this.myMap = new Map();
    // this.setCounters();

  }

  getOrders(): void {
    let xx = 0;
    const employeeId = this.userService.currentUser.id;
    this.http.get(this.employeesRestaurantIdUrl + employeeId).subscribe(empId => {
      this.http.get<RestaurantOrders[]>(this.restaurantOrdersUrl + empId).subscribe
      (results => {
        results = results.reduce((acc, {orderId, name}) => {
          const existing = acc.find(i => i.orderId === orderId)
          if (existing) {
            existing.name.push(name);
            }
          else {acc.push({orderId, name: [name]}); }

          return acc
        }, [])
        this.restaurantOrders = results;

        for(let r of results)
        {
          this.myMap.set(r.orderId, r.name.length);
        }
        // console.log(this.restaurantOrders.length);
      } );
    });
    // const id = +this.route.snapshot.paramMap.get('id');
    // zmienić na id dla zalogowanej restauracji
    // this.restaurantOrders$ = this.restaurantOrdersService.getOrders(42);
    // this.restId = this.restaurantOrdersService.getRestaurantId();

    // console.log('restId: ' + this.restId);
    // 42
    // this.employeeId = this.userService.currentUser.id;
    //
    // this.restaurantOrdersService.getOrders(this.restId).subscribe
    // (results => {
    //   results = results.reduce((acc, {orderId, name}) => {
    //     const existing = acc.find(i => i.orderId === orderId)
    //     if (existing) {
    //       existing.name.push(name) }
    //     else {acc.push({orderId, name: [name]})}
    //
    //     return acc
    //   }, [])
    //   this.restaurantOrders = results;
    //   console.log(this.restaurantOrders);
    // } );


    // this.restaurantOrdersService.restaurantOrders$.subscribe
    // (results => {
    //   results = results.reduce((acc, {orderId, name}) => {
    //     const existing = acc.find(i => i.orderId === orderId)
    //     if (existing) {
    //       existing.name.push(name) }
    //     else {acc.push({orderId, name: [name]})}
    //
    //     return acc
    //   }, [])
    //   this.restaurantOrders = results;
    //   console.log(this.restaurantOrders);
    // } );
    // console.log(this.restaurantOrders);
    // this.mergeOrders();
    // this.restaurantOrders$.subscribe
    // (results => {
    //   results = results.reduce((acc, {orderId, name}) => {
    //     const existing = acc.find(i => i.orderId === orderId)
    //     if (existing) {
    //       existing.name.push(name) }
    //     else {acc.push({orderId, name: [name]})}
    //
    //     return acc
    //   }, [])
    //   this.restaurantOrders = results;
    //   console.log(this.restaurantOrders.length);
    // } );
  }

  setDone(id): void {
    // let
    const removeIndex  = this.restaurantOrders.findIndex(order => order.orderId === id);
    this.restaurantOrders.splice(removeIndex, 1);

  }

  changeOrderStatus(id){
    return this.http.get<Order>(this.setOrderStatusUrl + id.toString())
      .subscribe(r=>{ console.log(r.orderId); console.log(r.orderStatus);});
  }

  refresh() {
    this.getOrders();
  }

  setCounters(): void {

    for(const restOrder of this.restaurantOrders)
    {
      this.myMap.set(restOrder._orderId, 0);
    }

    console.log(this.myMap);

  }

  fillCheckbox(e, orderId) {

    if(e.target.checked) {
      this.myMap.set(orderId, this.myMap.get(orderId) - 1);
    }
  }

  checkDisabled(orderId): boolean {

    if(this.myMap.get((orderId)) <= 0) {
      return false
    }
    else {
      return true;
    }
  }

  // setOrderStatus(orderId) {
  //
  //   this.http.get(this.setOrderStatusUrl + orderId);
  // }
}
