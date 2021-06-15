import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Meal} from '../model/meal.model';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestaurantMenuService {

  private mealUrl = environment.apiBaseUrl + '/restaurant/getmeals?id=';
  totalCost: number;
  minOrderCost: number;

  orderMeals: Meal[];

  constructor(
    private http: HttpClient) { this.orderMeals = []; }

  getMeals(id): Observable<Meal[]> {

    return this.http.get<Meal[]>(this.mealUrl + id.toString());
  }
}
