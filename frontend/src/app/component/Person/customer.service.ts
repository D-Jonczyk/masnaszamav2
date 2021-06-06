import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService{
 private apiServerUrl = environment.apiBaseUrl + '/customer';

  constructor(private http: HttpClient) {}

}
