import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestaurantSummary } from '../model/restaurant-summary.model';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestaurantSummaryService {

  private restaurantSummaryUrl = environment.apiBaseUrl + '/restaurant/getbycity?city=';
  private openedRestaurantUrl = environment.apiBaseUrl + '/restaurant/getOpened?city=';
  private freeDeliveryRestaurantUrl = environment.apiBaseUrl + '/restaurant/getFreeDelivery?city=';
  private ratingRestaurantUrl = environment.apiBaseUrl + '/restaurant/sortByRating?city=';
  private orderPriceRestaurantUrl = environment.apiBaseUrl + '/restaurant/sortByOrderPrice?city=';
  private deliveryTimeRestaurantUrl = environment.apiBaseUrl + '/restaurant/sortByDeliveryTime?city=';
  private alphaRestaurantUrl = environment.apiBaseUrl + '/restaurant/sortAlpha?city=';
  private deliveryCostRestaurantUrl = environment.apiBaseUrl + '/restaurant/sortByDeliveryCost?city=';

  address: string;

  constructor(
    private http: HttpClient) { }

  getRestaurant(): Observable<RestaurantSummary[]> {

    return this.http.get<RestaurantSummary[]>
    (this.restaurantSummaryUrl + this.address.toString());
  }

  getOpenedRestaurant(): Observable<RestaurantSummary[]>{

    return this.http.get<RestaurantSummary[]>
    (this.openedRestaurantUrl + this.address.toString());
  }
  getFreeDeliveryRestaurant(): Observable<RestaurantSummary[]>{

    return this.http.get<RestaurantSummary[]>
    (this.freeDeliveryRestaurantUrl + this.address.toString());
  }

  getByRatingRestaurant(): Observable<RestaurantSummary[]>{

    return this.http.get<RestaurantSummary[]>
    (this.ratingRestaurantUrl + this.address.toString());
  }

  getByOrderCostRestaurant(): Observable<RestaurantSummary[]>{

    return this.http.get<RestaurantSummary[]>
    (this.orderPriceRestaurantUrl + this.address.toString());
  }

  getByDeliveryTime(): Observable<RestaurantSummary[]>{

    return this.http.get<RestaurantSummary[]>
    (this.deliveryTimeRestaurantUrl + this.address.toString());
  }

  getByAlpha(): Observable<RestaurantSummary[]>{

    return this.http.get<RestaurantSummary[]>
    (this.alphaRestaurantUrl + this.address.toString());
  }

  getByDeliveryCost(): Observable<RestaurantSummary[]>{

    return this.http.get<RestaurantSummary[]>
    (this.deliveryCostRestaurantUrl + this.address.toString());
  }

}
