import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DeliveryOrder} from './delivery-order';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeliveryOrderService {

  private deliveryOrdersUrl = environment.apiBaseUrl + '/order/getDeliveryByCourierId?courierId=';
  private updateOrderUrl = environment.apiBaseUrl + '/order/updateDeliveryOrderStatus?orderId=';

  constructor(private http: HttpClient) {
  }

  getDeliveryOrders(courierId): Observable<DeliveryOrder[]> {
    return this.http.get<DeliveryOrder[]>(this.deliveryOrdersUrl + courierId.toString());
  }

  finishDeliveryOrder(orderId: number): Observable<DeliveryOrder> {
    return this.http.get<DeliveryOrder>(this.updateOrderUrl + orderId.toString());
  }

}
