import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FinishedOrders} from './finished-orders';
import {environment} from '../../../../environments/environment';

@Injectable( {
  providedIn: 'root'
})
export class FinishedOrdersService {

  private finishedOrdersUrl = environment.apiBaseUrl + '/courier/getDeliveryHistory/';

  constructor(private http: HttpClient) {

  }

  getFinishedOrders(courierId): Observable<FinishedOrders[]> {
    return this.http.get<FinishedOrders[]>(this.finishedOrdersUrl + courierId);
  }
}
