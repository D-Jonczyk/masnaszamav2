import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {Opinion} from './opinion';


@Injectable( {
  providedIn: 'root'
})
export class OpinionService {

  private userOrdersUrl = environment.apiBaseUrl + '/order/getbyuser/customer?customerId=';

  constructor(private http: HttpClient) {

  }

  getOpinionMealsByOrderId(orderId): Observable<Opinion[]> {
    return this.http.get<Opinion[]>(this.userOrdersUrl + orderId);
  }
}
