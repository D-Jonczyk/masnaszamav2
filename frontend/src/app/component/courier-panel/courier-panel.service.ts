import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {Courier} from '../Person/Employee/courier';

@Injectable({
  providedIn: 'root'
})
export class CourierPanelService {
  private courierProfileUrl = environment.apiBaseUrl + '/courier/findByPhone/';

  constructor(private http: HttpClient) {
  }

  getCourierProfileByPhone(phonenumber: number): Observable<Courier> {
    return this.http.get<Courier>(this.courierProfileUrl + phonenumber);
  }
}
