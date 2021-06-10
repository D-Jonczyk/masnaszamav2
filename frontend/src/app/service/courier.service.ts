import {Injectable} from '@angular/core';
import {Courier} from '../component/Person/Employee/courier';
import {ApiService} from './api.service';
import {ConfigService} from './config.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourierService{

  currentCourier: Courier;

  constructor(
    private apiService: ApiService,
    private config: ConfigService
  ) {
  }

  initUser() {
    const promise = this.apiService.get(this.config.refreshTokenUrl).toPromise()
      .then(res => {
        if (res.access_token !== null) {
          return this.getCourierInfo().toPromise()
            .then(courier => {
              this.currentCourier = courier;
            });
        }
      })
      .catch(() => null);
    return promise;
  }

  getCourierInfo() {
    return this.apiService.get(this.config.whoamiUrl)
      .pipe(map(user => this.currentCourier = user));
  }

}
