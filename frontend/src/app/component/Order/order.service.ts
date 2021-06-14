import { Order} from './order';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiServerUrl = environment.apiBaseUrl + '/order';

  constructor(private http: HttpClient) {}

  public getOrder(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiServerUrl + '/getby/customer?customerId=');
  }
  public getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiServerUrl + '/get/all');
  }
}
