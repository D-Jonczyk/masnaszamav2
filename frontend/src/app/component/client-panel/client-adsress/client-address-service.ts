import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {ClientAddress} from './client-address';


@Injectable( {
  providedIn: 'root'
})
export class ClientAddressService {

  private userOrdersUrl = environment.apiBaseUrl + '/address/getby/user?userId=';

  constructor(private http: HttpClient) {

  }

  getAddressByUserId(userId): Observable<ClientAddress[]> {
    return this.http.get<ClientAddress[]>(this.userOrdersUrl + userId);
  }
}
