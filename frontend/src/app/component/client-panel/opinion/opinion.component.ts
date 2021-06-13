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
import {OrderHistory} from '../order-history/order-history';
import {HttpErrorResponse} from '@angular/common/http';
import {OpinionService} from './opinion-service';


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
              public  opinionService:OpinionService,
              public clientPanelService:ClientPanelService ) {
    library.addIcons(faSquare, faCheckSquare, faMedium, faGithub, faClock, faMapMarkerAlt, faLocationArrow, faInfo, faTruckLoading,
      faClipboardList, faHeadset, faPhoneAlt, faCheckCircle, faPlayCircle, faListAlt, faLocationArrow,
      faCalendarAlt, faUserCircle, faQuestionCircle, faComments, faHistory,faSignOutAlt,faCrown,faQuestion,faBullhorn);
  }

  ngOnInit(): void {
  }
  // public getOpinionMealsByOrderId(): void {
  //   this.opinionService.getOpinionMealsByOrderId(this.orderId).subscribe(
  //     (response: OrderHistory[]) => {
  //       this.orderHistory = response;
  //       console.log(this.orderHistory);
  //       if(response.length === 0)
  //       {
  //         this.empty = true;
  //       }
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   );
  // }
}
