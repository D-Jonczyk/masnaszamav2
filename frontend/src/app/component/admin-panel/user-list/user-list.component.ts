import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Meal} from '../model/meal.model';
import {User} from '../../Person/user';
import {UserListService} from './user-list.service';
import {Restaurant} from '../model/restaurant-summary.model';

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
