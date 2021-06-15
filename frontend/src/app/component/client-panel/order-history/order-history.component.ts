import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {
  faCalendarAlt,
  faCheckSquare,
  faClipboardList,
  faCoffee,
  faComments,
  faFingerprint,
  faHandMiddleFinger,
  faHeadset,
  faHistory,
  faInfo,
  faListAlt,
  faLocationArrow,
  faMapMarkerAlt,
  faPhoneAlt,
  faQuestionCircle,
  faSearch,
  faSquare,
  faTruckLoading,
  faUserCircle,
  faSignOutAlt,
  faCrown,
  faQuestion,
  faDonate,
  faBullhorn,
  faUtensils,
  faRoad,
  faListOl,
  faRetweet,
  faCity, faHamburger, faDollarSign
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
import {OrderAddress} from './order-address';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import {Observable} from 'rxjs';

export let ORDERID;
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
  orderId = ORDERID;
  empty:boolean;
  i:number;
  city:string;
  street:string;
  flatNumber:number;
  element;
  orderHistory$: OrderHistory[];
  mealNumber= 0;
  constructor(public route: ActivatedRoute,
              public library: FaIconLibrary,
              public clientPanelService: ClientPanelService,
              public orderHistoryService:OrderHistoryService,
              config: NgbModalConfig,
              private modalService: NgbModal
               ) {
    config.backdrop = 'static';
    config.keyboard = false;
    library.addIcons(faSquare, faCheckSquare, faMedium, faGithub, faClock, faMapMarkerAlt, faLocationArrow, faInfo, faTruckLoading,
      faClipboardList, faHeadset, faPhoneAlt, faCheckCircle, faPlayCircle, faListAlt, faLocationArrow,
      faCalendarAlt, faUserCircle, faQuestionCircle, faComments, faHistory,faSignOutAlt,faCrown,faQuestion,faDonate,faBullhorn,faUtensils,
      faRoad, faListOl,faCity, faHamburger, faDollarSign);
  }

  ngOnInit(): void {
this.getUserOrdersById();
  }
  public getUserOrdersById(): void {
    this.orderHistoryService.getUserOrdersById(this.clientId).subscribe
    (results => {
      if(results.length===0){
        this.empty=true;
      }
      results = results.reduce((acc, {desiredDeliveryTime, orderPrice,
       orderedTime, orderId, tip, customerId, restaurantId, statusId
        ,restaurantName, comment, addressId, city, street, flatNumber,mealName,
      price,opinionComment}) => {
        const existing = acc.find(i => i.orderId === orderId)
        if (existing) {
          existing.mealName.push(mealName)
          existing.price.push(price)
          existing.opinionComment.push(opinionComment)}
        else {acc.push({orderId, mealName: [mealName],desiredDeliveryTime, orderPrice,
          orderedTime,tip, customerId, restaurantId, statusId
          ,restaurantName, comment, addressId, city, street, flatNumber,price: [price],opinionComment:[opinionComment]})}
        return acc
      }, [])
      this.orderHistory$ = results;
      console.log(this.orderHistory$);
    } );
  }
  open(content) {
    this.modalService.open(content);
    console.log(this.element)
  }
}
