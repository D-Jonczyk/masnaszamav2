import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {Courier} from '../../Person/Employee/courier';

@Injectable({
  providedIn: 'root'
})
export class CourierProfileService {

  private courierProfileUrl = environment.apiBaseUrl + '/courier/find/';
  private editProfileUrl = environment.apiBaseUrl + '/courier/update';

  constructor(private http: HttpClient) {
  }

  getCourierProfile(courierId) {
    console.log('courier service id:', courierId);
    return this.http.get(this.courierProfileUrl + courierId);
  }

  editCourierProfile(courier: Courier){
    console.log('courier.id: ', courier.id, 'phoneNumber: ',
      courier.phonenumber, 'firstName', courier.firstName, 'lastName: ', courier.lastName);
    return this.http.put(this.editProfileUrl, courier);
  }
}

