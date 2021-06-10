import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {RestaurantOrders} from "../model/restaurant-orders.model";
import {RestaurantOrdersService} from "../restaurant-orders-service/restaurant-orders.service";
import {FaIconLibrary} from "@fortawesome/angular-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-restaurant-orders',
  templateUrl: './restaurant-orders.component.html',
  styleUrls: ['./restaurant-orders.component.css']
})
export class RestaurantOrdersComponent implements OnInit {

  restaurantOrders$: Observable<RestaurantOrders[]>;
  myMap: Map<number, number>;
  restId: number;

  constructor(private restaurantOrdersService: RestaurantOrdersService,
              public library: FaIconLibrary) {
    library.addIcons(faCheck);
  }

  restaurantOrders: RestaurantOrders[] = [];

  ngOnInit(): void {
    this.getOrders();
    this.myMap = new Map();
    this.setCounters();
  }

  getOrders(): void {
    // const id = +this.route.snapshot.paramMap.get('id');
    // zmienić na id dla zalogowanej restauracji
    // this.restaurantOrders$ = this.restaurantOrdersService.getOrders(42);
    // this.restId = this.restaurantOrdersService.getRestaurantId();

  console.log('restId: ' + this.restId);
    // 42
    this.restaurantOrdersService.getOrders(this.restId).subscribe
    (results => {
      results = results.reduce((acc, {orderId, name}) => {
        const existing = acc.find(i => i.orderId === orderId)
        if (existing) {
          existing.name.push(name) }
        else {acc.push({orderId, name: [name]})}

        return acc
      }, [])
      this.restaurantOrders = results;
      console.log(this.restaurantOrders);
    } );


    // console.log(this.restaurantOrders);
    // this.mergeOrders();
  }

  async getRestaurantId() {
    // await this.restId = this.restaurantOrdersService.getRestaurantId();
  }

  setDone(id): void {
    // let
    const removeIndex  = this.restaurantOrders.findIndex(order => order.orderId === id);
    this.restaurantOrders.splice(removeIndex, 1);
  }

  setCounters(): void {

    for(const restOrder of this.restaurantOrders)
    {
      this.myMap.set(restOrder._orderId, 0);
    }

    console.log(this.myMap);

  }
}
