import {Injectable} from '@angular/core';
import {ClientPanel} from './client-panel';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {UserService} from '../../service';
import {User} from '../Person/user';
import {Courier} from '../Person/Employee/courier';



@Injectable({
  providedIn: 'root'
})
export class ClientPanelService {
  clientName:string;
  clientLastName:string;
  accImgLink:string;
  user = this.userService.currentUser;
  private clientProfileByIdUrl = environment.apiBaseUrl + '/user/findById/';
  private editProfileUrl = environment.apiBaseUrl + '/user/update';
  constructor(private http: HttpClient,
              private userService: UserService,) {
  }
  getClientProfileById(id:number): Observable<User> {
    return this.http.get<User>(this.clientProfileByIdUrl + id);
  }
  editClientProfile(user: User){
    return this.http.put(this.editProfileUrl, user);
  }
}
