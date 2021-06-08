import { Component, OnInit } from '@angular/core';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {faPlayCircle} from '@fortawesome/free-regular-svg-icons';
import {
  faCalendarAlt, faComments,
  faHistory,
  faListAlt,
  faLocationArrow, faQuestionCircle,
  faSearch,
  faUserCircle
} from '@fortawesome/free-solid-svg-icons';

import {Courier} from '../Person/Employee/courier';
import {User} from '../Person/user';
import {UserService} from '../../service';
import {CourierService} from '../../service/courier.service';
import {HttpErrorResponse} from '@angular/common/http';
import {CourierPanelService} from './courier-panel.service';

export const LINKS: object[] = [
  { title: 'Nawigacja', fragment: '/courier/navigation', icon: 'location-arrow' },
  { title: 'Lista zamówień', fragment: '/courier/orderlist', icon: 'list-alt'},
  { title: 'Czat', fragment: '/courier/chat', icon: 'comments'},
  { title: 'Grafik', fragment: '/courier/show-schedule', icon: 'calendar-alt'},
  { title: 'Mój profil', fragment: '/courier/profile', icon: 'user-circle'},
  { title: 'Historia zamówień', fragment: '/courier-orderhistory', icon: 'history'},
  { title: 'Wsparcie kuriera', fragment: '/courier/support', icon: 'question-circle'}
];

export let COURIERID;

@Component({
  selector: 'app-courier-panel',
  templateUrl: './courier-panel.component.html',
  styleUrls: ['./courier-panel.component.css']
})
export class CourierPanelComponent implements OnInit {
  title = 'Panel kuriera';
  links = LINKS;
  user: User;
  courier: Courier;

  constructor(private library: FaIconLibrary,
              private userService: UserService,
              private courierPanelService: CourierPanelService) {
    library.addIcons(faPlayCircle, faSearch,
      faListAlt, faLocationArrow, faCalendarAlt, faUserCircle, faQuestionCircle,
      faComments, faHistory);
  }

  ngOnInit(): void {
    this.user = this.userService.currentUser;
    if(this.hasSignedIn()) {
      console.log('courier-panel this.user: ', this.user.id, this.user.firstName, this.user.phonenumber);
      this.getCourierProfile(this.user.phonenumber);
    }
  }

  hasSignedIn() {
    return !!this.userService.currentUser;
  }

  getCourierProfile(phonenumber): void {
    this.courierPanelService.getCourierProfileByPhone(phonenumber).subscribe(
      (response: Courier) => {
        console.log('phonenumber in arrow:', phonenumber);
        this.courier = response;
        console.log('courier profile id"', response.id, '" firstname: "', response.firstName,'" lastname "', response.lastName,'"');
        COURIERID = response.id;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}

