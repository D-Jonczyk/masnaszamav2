import { Component, OnInit } from '@angular/core';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {faCheckCircle, faClock, faPlayCircle} from '@fortawesome/free-regular-svg-icons';
import {
  faCalendarAlt,  faCheckSquare, faClipboardList,  faCoffee, faComments, faFingerprint, faHandMiddleFinger,
  faHeadset, faHistory,  faInfo, faListAlt,  faLocationArrow,  faMapMarkerAlt, faPhoneAlt, faQuestionCircle, faSearch,
  faSquare,  faTruckLoading, faUserCircle, faSignOutAlt,faCrown,faQuestion,faBullhorn,faMapMarker
} from '@fortawesome/free-solid-svg-icons';
import {Customer} from '../../Person/customer';
import {CLIENTID, LINKS} from '../client-panel.component';
import {faGithub, faMedium} from '@fortawesome/free-brands-svg-icons';
import {ClientPanelService} from '../client-panel-service';
import {OrderHistory} from '../order-history/order-history';
import {HttpErrorResponse} from '@angular/common/http';
import {ClientAddress} from './client-address';
import {ClientAddressService} from './client-address-service';


@Component({
  selector: 'app-client-adress',
  templateUrl: './client-adress.component.html',
  styleUrls: ['./client-adress.component.css']
})
export class ClientAdressComponent implements OnInit {

  titel = 'Adresy klienta';
  public customers: Customer[];
  public clientName = this.clientPanelService.clientName;
  links=LINKS;
  clientId = CLIENTID;
  public clientAddress: ClientAddress[];
  constructor(private library: FaIconLibrary,
              public clientAddressService:ClientAddressService,
              public clientPanelService:ClientPanelService ) {
    library.addIcons(faSquare, faCheckSquare, faMedium, faGithub, faClock, faMapMarkerAlt, faLocationArrow, faInfo, faTruckLoading,
      faClipboardList, faHeadset, faPhoneAlt, faCheckCircle, faPlayCircle, faListAlt, faLocationArrow,
      faCalendarAlt, faUserCircle, faQuestionCircle, faComments, faHistory,faSignOutAlt,faCrown,faQuestion,faBullhorn, faMapMarkerAlt,
      faMapMarker);
  }

  ngOnInit(): void {
    this.getAddressByUserId();
  }
  public getAddressByUserId(): void {
    this.clientAddressService.getAddressByUserId(this.clientId).subscribe(
      (response: ClientAddress[]) => {
        this.clientAddress = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
