import {Injectable} from '@angular/core';
import {ClientPanel} from './client-panel';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {UserService} from '../../service';


@Injectable({
  providedIn: 'root'
})
export class ClientPanelService {
  clientName:string;
  clientLastName:string;
  accImgLink:string;
  user = this.userService.currentUser;
  userId =this.user.id;
  private clientProfileUrl = environment.apiBaseUrl + '/client/find/';
  private editClientProfileUrl = environment.apiBaseUrl + '/client/update';
  constructor(private http: HttpClient,
              private userService: UserService,) {
  }
  getClientProfile(userId): Observable<ClientPanel> {
    return this.http.get<ClientPanel>(this.clientProfileUrl + userId);
  }

  editClientProfile(client: ClientPanel): Observable<ClientPanel> {
    return this.http.put<ClientPanel>(this.editClientProfileUrl, client);
  }

}
