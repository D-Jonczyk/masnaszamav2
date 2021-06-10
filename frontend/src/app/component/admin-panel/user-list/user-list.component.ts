import { Component, OnInit } from '@angular/core';
import {User} from '../../Person/user';
import {UserListService} from './user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: any = [];

  constructor(private userListService: UserListService) { }

  ngOnInit(): void {
    this.userListService.getUsers().subscribe((result: User) => {
      this.users = result;
      console.log('resto list response: ', result);
    });
  }

}
