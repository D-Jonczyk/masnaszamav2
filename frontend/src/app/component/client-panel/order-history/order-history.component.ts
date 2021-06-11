import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {
  faCalendarAlt, faCheckSquare, faClipboardList, faCoffee, faComments, faFingerprint, faHandMiddleFinger,
  faHeadset, faHistory, faInfo, faListAlt, faLocationArrow, faMapMarkerAlt, faPhoneAlt, faQuestionCircle, faSearch,
  faSquare, faTruckLoading, faUserCircle, faSignOutAlt, faCrown, faQuestion, faDonate,faBullhorn, faUtensils
} from '@fortawesome/free-solid-svg-icons';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {faGithub, faMedium} from '@fortawesome/free-brands-svg-icons';
import {faCheckCircle, faClock, faPlayCircle} from '@fortawesome/free-regular-svg-icons';
import {CLIENTID, LINKS} from '../client-panel.component';
import {ClientPanelService} from '../client-panel-service';
import {FinishedOrders} from '../../courier-panel/courier-orderhistory/finished-orders';
import {HttpErrorResponse} from '@angular/common/http';
import { OrderHistoryService} from './order-history-service';
import {OrderHistory} from './order-history';
import {User} from '../../Person/user';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  titel = 'Hisotoria zamowien klienta';
  faCoffee = faCoffee;
  fas = 'fas';
  links=LINKS;
  clientId = CLIENTID;

  public orderHistory: OrderHistory[];

  constructor(public route: ActivatedRoute,
              public library: FaIconLibrary,
              public clientPanelService: ClientPanelService,
              public orderHistoryService:OrderHistoryService,
              ) {
    library.addIcons(faSquare, faCheckSquare, faMedium, faGithub, faClock, faMapMarkerAlt, faLocationArrow, faInfo, faTruckLoading,
      faClipboardList, faHeadset, faPhoneAlt, faCheckCircle, faPlayCircle, faListAlt, faLocationArrow,
      faCalendarAlt, faUserCircle, faQuestionCircle, faComments, faHistory,faSignOutAlt,faCrown,faQuestion,faDonate,faBullhorn,faUtensils);
  }

  ngOnInit(): void {
this.getUserOrdersById();
  }
  public getUserOrdersById(): void {
    this.orderHistoryService.getUserOrdersById(this.clientId).subscribe(
      (response: OrderHistory[]) => {
        this.orderHistory = response;
        console.log(this.orderHistory);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
