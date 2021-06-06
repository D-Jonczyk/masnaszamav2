import {Injectable} from '@angular/core';
import {CourierProfile} from './courier-profile';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourierProfileService {

  private courierProfileUrl = environment.apiBaseUrl + '/courier/find/';
  private editProfileUrl = environment.apiBaseUrl + '/courier/update';

  constructor(private http: HttpClient) {
  }

  getCourierProfile(courierId): Observable<CourierProfile> {
    return this.http.get<CourierProfile>(this.courierProfileUrl + courierId);
  }

  editCourierProfile(courier: CourierProfile): Observable<CourierProfile> {
    console.log('personId: ', courier.personId, 'phoneNumber: ',
      courier.phoneNumber, 'firstName', courier.firstName, 'lastName: ', courier.lastName);
    return this.http.put<CourierProfile>(this.editProfileUrl, courier);
  }
}

