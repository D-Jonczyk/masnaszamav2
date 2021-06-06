import {Injectable} from '@angular/core';
import {ClientProfile} from './client-profile';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientProfileService {

  private clientProfileUrl = environment.apiBaseUrl + '/client/find/';
  private editProfileUrl = environment.apiBaseUrl + '/client/update';
  private loadImageUrl = environment.apiBaseUrl + '/client/loadImage';
  constructor(private http: HttpClient) {
  }

  getClientProfile(userName): Observable<ClientProfile> {
    return this.http.get<ClientProfile>(this.clientProfileUrl + userName);
  }

  editClientProfile(client: ClientProfile): Observable<ClientProfile> {
    return this.http.put<ClientProfile>(this.editProfileUrl, client);
   }

  loadImageProfile(client: ClientProfile): Observable<ClientProfile> {
    return this.http.put<ClientProfile>(this.loadImageUrl, client);
  }

}
