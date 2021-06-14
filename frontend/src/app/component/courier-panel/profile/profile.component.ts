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
  courier: any = '';
  operationStatus = '';

  constructor(public route: ActivatedRoute, private library: FaIconLibrary,
              private courierProfileService: CourierProfileService) {
    library.addIcons(faPlayCircle, faPauseCircle,
      faListAlt, faLocationArrow, faCalendarAlt, faUserCircle, faQuestionCircle,
      faComments, faHistory);
  }

  ngOnInit(): void {
    this.courierProfileService.getCourierProfile(COURIERID).subscribe(
      (response: Courier) => {
        console.log('inside oninit courier:', response.id, response.firstName);
        this.courier = response;
      }
    )
  }


  public onEditProfile(courier: Courier): void {
    this.courierProfileService.editCourierProfile(courier).subscribe(
      (response: Courier) => {
        this.onSuccessAlert();
      },
      (error: HttpErrorResponse) => {
        this.onFailureAlert(error);
      }
    );
  }

  closeAlert(): void {
    this.operationStatus = '';
  }

  toggleShiftButton(): void {
    this.isWorking = !this.isWorking;
  }

  onSuccessAlert(): void {
    this.operationStatus = 'success';
  }

  onFailureAlert(error: HttpErrorResponse): void {
    alert('Wystąpił błąd przy zapisywaniu danych, błąd: ' + error.message);
    this.operationStatus = 'fail';
  }
}
