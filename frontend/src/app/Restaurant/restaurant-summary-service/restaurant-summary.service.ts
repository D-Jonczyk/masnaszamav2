import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestaurantSummary } from '../model/restaurant-summary.model';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestaurantSummaryService {

  private restaurantSummaryUrl = environment.apiBaseUrl + '/restaurant/getbycity?city=';
  address: string;

  constructor(
    private http: HttpClient) { }

  getRestaurant(): Observable<RestaurantSummary[]> {

    return this.http.get<RestaurantSummary[]>
    (this.restaurantSummaryUrl + this.address.toString());
  }
}
