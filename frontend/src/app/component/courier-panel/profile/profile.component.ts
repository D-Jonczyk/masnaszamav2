import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {faPauseCircle, faPlayCircle} from '@fortawesome/free-regular-svg-icons';
import {COURIERID, LINKS} from '../courier-panel.component';
import {
  faCalendarAlt,
  faComments,
  faHistory,
  faListAlt,
  faLocationArrow,
  faQuestionCircle,
  faUserCircle
} from '@fortawesome/free-solid-svg-icons';
import {CourierProfileService} from './courier-profile.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Courier} from '../../Person/Employee/courier';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['../courier-panel.component.css', './profile.component.css']
})
export class ProfileComponent implements OnInit {
  isClicked = true;
  isWorking = false;
  links = LINKS;
  public courierProfile: Courier;
  public editProfile: Courier;

  constructor(public route: ActivatedRoute, private library: FaIconLibrary,
              private courierProfileService: CourierProfileService) {
    library.addIcons(faPlayCircle, faPauseCircle,
      faListAlt, faLocationArrow, faCalendarAlt, faUserCircle, faQuestionCircle,
      faComments, faHistory);
  }

  ngOnInit(): void {
    this.getCourierProfile(COURIERID);
  }

  public onEditProfile(courier: Courier): void {
    this.courierProfileService.editCourierProfile(courier).subscribe(
      (response: Courier) => {
        console.log(response);
        this.getCourierProfile(response.id);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  getCourierProfile(courierId): void {
    this.courierProfileService.getCourierProfile(courierId).subscribe(
      (response: Courier) => {
        this.courierProfile = response;
        this.editProfile = this.courierProfile;
        console.log('courier profile id"', response.id, '" firstname: "', response.firstName,'" lastname "', response.lastName,'"');
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  toggleDisplay(): void {
    this.isClicked = !this.isClicked;
  }

  toggleShiftButton(): void {
    this.isWorking = !this.isWorking;
  }
}
