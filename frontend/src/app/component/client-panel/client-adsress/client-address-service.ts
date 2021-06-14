import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {ClientAddress} from './client-address';
import {User} from '../../Person/user';


@Injectable( {
  providedIn: 'root'
})
export class ClientAddressService {

  private userOrdersUrl = environment.apiBaseUrl + '/address/getby/user?userId=';
  private addressOrdersUrl = environment.apiBaseUrl + '/address/getby/customer?customerId=';
  constructor(private http: HttpClient) {

  }

  getAddressByUserId(userId): Observable<ClientAddress> {
    return this.http.get<ClientAddress>(this.userOrdersUrl + userId);
  }
  getAddressFromOrder(customerId): Observable<ClientAddress[]> {
    return this.http.get<ClientAddress[]>(this.addressOrdersUrl + customerId);
  }
}
