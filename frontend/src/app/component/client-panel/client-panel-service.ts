import {Injectable} from '@angular/core';
import {ClientPanel} from './client-panel';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {UserService} from '../../service';
import {User} from '../Person/user';


@Injectable({
  providedIn: 'root'
})
export class ClientPanelService {
  clientName:string;
  clientLastName:string;
  accImgLink:string;
  user = this.userService.currentUser;
  private clientProfileUrl = environment.apiBaseUrl + '/user/';
  constructor(private http: HttpClient,
              private userService: UserService,) {
  }
  getClientProfile(id:number): Observable<User> {
    return this.http.get<User>(this.clientProfileUrl + id);
  }

}
