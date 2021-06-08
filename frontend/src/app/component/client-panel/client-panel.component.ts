import { Component, OnInit } from '@angular/core';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {faCheckCircle, faClock, faPlayCircle} from '@fortawesome/free-regular-svg-icons';
import {
  faCalendarAlt,  faCheckSquare, faClipboardList,  faCoffee, faComments, faFingerprint, faHandMiddleFinger,
  faHeadset, faHistory,  faInfo, faListAlt,  faLocationArrow,  faMapMarkerAlt, faPhoneAlt, faQuestionCircle, faSearch,
  faSquare,  faTruckLoading, faUserCircle, faSignOutAlt,faCrown
} from '@fortawesome/free-solid-svg-icons';

import {Customer} from '../Person/customer';
import {faGithub, faMedium} from '@fortawesome/free-brands-svg-icons';
import {HttpErrorResponse} from '@angular/common/http';
import {ClientPanel} from './client-panel';
import {ClientPanelService} from './client-panel-service';
import {UserService} from "../../service";

export const LINKS: object[] = [
  { title: 'Moj profil', fragment: '/client-profile', icon: 'user-circle' },
  { title: 'Lista Adresow', fragment: '/client-adress', icon: 'list-alt'},
  { title: 'Historia zamowien', fragment: '/order-history', icon: 'history'},
  { title: 'Ulubione', fragment: '/favorite-restaurant', icon: 'crown'},
  { title: 'Wyloguj', fragment: '/logout', icon: 'sign-out-alt'},
];

export const accLink = 'assets/image/user.png';

@Component({
  selector: 'app-client-panel',
  templateUrl: './client-panel.component.html',
  styleUrls: ['./client-panel.component.css'],

})

export class ClientPanelComponent implements OnInit {
  titel = 'Panel Klienta';
  links=LINKS;

  constructor(private library: FaIconLibrary,
              public clientPanelService: ClientPanelService,
              private userService: UserService,

              ) {
    library.addIcons(faSquare, faCheckSquare, faMedium, faGithub, faClock, faMapMarkerAlt, faLocationArrow, faInfo, faTruckLoading,
      faClipboardList, faHeadset, faPhoneAlt, faCheckCircle, faPlayCircle, faListAlt, faLocationArrow,
      faCalendarAlt, faUserCircle, faQuestionCircle, faComments, faHistory,faSignOutAlt,faCrown);
  }

  ngOnInit(): void {
    this.loadImage()

  }
  userName() {
    const user = this.userService.currentUser;
    this.clientPanelService.clientName = user.firstName + ' ' + user.lastName;
    return this.clientPanelService.clientName;
  }
  loadImage(){
    const user = this.userService.currentUser;
    this.clientPanelService.accImgLink = user.imgUrl;
    return this.clientPanelService.accImgLink;
  }

}
