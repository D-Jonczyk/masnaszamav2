import { Component, OnInit } from '@angular/core';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {faCheckCircle, faClock, faPlayCircle} from '@fortawesome/free-regular-svg-icons';
import {
  faCalendarAlt,  faCheckSquare, faClipboardList,  faCoffee, faComments, faFingerprint, faHandMiddleFinger,
  faHeadset, faHistory,  faInfo, faListAlt,  faLocationArrow,  faMapMarkerAlt, faPhoneAlt, faQuestionCircle, faSearch,
  faSquare,  faTruckLoading, faUserCircle, faSignOutAlt,faCrown,faQuestion,faBullhorn
} from '@fortawesome/free-solid-svg-icons';
import {Customer} from '../../Person/customer';
import { LINKS } from '../client-panel.component';
import {faGithub, faMedium} from '@fortawesome/free-brands-svg-icons';
import {ClientPanelService} from '../client-panel-service';


@Component({
  selector: 'app-opinion',
  templateUrl: './opinion.component.html',
  styleUrls: ['./opinion.component.css']
})
export class OpinionComponent implements OnInit {

  titel = 'Opinie klienta';
  public customers: Customer[];
  public clientName = this.clientPanelService.clientName;
  links=LINKS;

  constructor(private library: FaIconLibrary,
              public clientPanelService:ClientPanelService ) {
    library.addIcons(faSquare, faCheckSquare, faMedium, faGithub, faClock, faMapMarkerAlt, faLocationArrow, faInfo, faTruckLoading,
      faClipboardList, faHeadset, faPhoneAlt, faCheckCircle, faPlayCircle, faListAlt, faLocationArrow,
      faCalendarAlt, faUserCircle, faQuestionCircle, faComments, faHistory,faSignOutAlt,faCrown,faQuestion,faBullhorn);
  }

  ngOnInit(): void {
  }

}
