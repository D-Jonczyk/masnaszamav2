import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {OrderHistory} from './order-history';
import {OrderAddress} from './order-address';


@Injectable( {
  providedIn: 'root'
})
export class OrderHistoryService {

  private userOrdersUrl = environment.apiBaseUrl + '/order/getbyuser/customer?customerId=';
  private addressOrdersUrl = environment.apiBaseUrl + '/address/getby/';
  constructor(private http: HttpClient) {

  }

  getUserOrdersById(userId): Observable<OrderHistory[]> {
    return this.http.get<OrderHistory[]>(this.userOrdersUrl + userId);
  }
  getAddressOrdersById(addressId): Observable<OrderAddress[]> {
    return this.http.get<OrderAddress[]>(this.addressOrdersUrl + addressId);
  }
}
