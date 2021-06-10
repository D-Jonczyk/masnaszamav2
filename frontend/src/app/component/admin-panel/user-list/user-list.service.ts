import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../Person/user';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  private userListUrl = 'http://localhost:8080/api/user/all';

  constructor(
    private http: HttpClient)
  { }

  getUsers() {
    return this.http.get(this.userListUrl);
  }
}
