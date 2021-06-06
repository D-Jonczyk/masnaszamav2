import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DaySchedule} from './day-schedule';
import { environment} from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourierScheduleService {

  private getCourierScheduleUrl = environment.apiBaseUrl + '/courier/getSchedule/';

  constructor(private http: HttpClient) {
  }

  getWeeklyCourierSchedule(courierId: number, weekNumber: number): Observable<DaySchedule[]> {
    return this.http.get<DaySchedule[]>(this.getCourierScheduleUrl + courierId + '/' + weekNumber);
  }

}
