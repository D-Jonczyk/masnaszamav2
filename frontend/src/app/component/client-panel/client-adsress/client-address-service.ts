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
  private editAddressUrl = environment.apiBaseUrl + '/address/update';
  constructor(private http: HttpClient) {

  }

  getAddressByUserId(userId): Observable<ClientAddress> {
    return this.http.get<ClientAddress>(this.userOrdersUrl + userId);
  }
  getAddressFromOrder(customerId): Observable<ClientAddress[]> {
    return this.http.get<ClientAddress[]>(this.addressOrdersUrl + customerId);
  }
  editAddress(clientAddress: ClientAddress){
    return this.http.put(this.editAddressUrl, clientAddress);
  }
}
