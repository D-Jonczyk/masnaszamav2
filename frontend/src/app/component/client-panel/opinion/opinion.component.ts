import { Component, OnInit } from '@angular/core';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {faCheckCircle, faClock, faPlayCircle} from '@fortawesome/free-regular-svg-icons';
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
  faBullhorn,
  faDonate,
  faUtensils,
  faRoad,
  faListOl,
  faCity,
  faHamburger, faDollarSign
} from '@fortawesome/free-solid-svg-icons';
import {Customer} from '../../Person/customer';
import {CLIENTID, LINKS} from '../client-panel.component';
import {faGithub, faMedium} from '@fortawesome/free-brands-svg-icons';
import {ClientPanelService} from '../client-panel-service';
import {OrderHistory} from '../order-history/order-history';
import {HttpErrorResponse} from '@angular/common/http';
import {OpinionService} from './opinion-service';
import {Opinion} from './opinion';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';

export let ORDERID;
@Component({
  selector: 'app-opinion',
  templateUrl: './opinion.component.html',
  styleUrls: ['./opinion.component.css']
})
export class OpinionComponent implements OnInit {
  clientId = CLIENTID;
  links=LINKS;
  empty:boolean;
  opinion$: Opinion[];
  element;
  titel = 'Opinie klienta';
  public customers: Customer[];
  public clientName = this.clientPanelService.clientName;
  constructor(private library: FaIconLibrary,
              public  opinionService:OpinionService,
              public clientPanelService:ClientPanelService,
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
    this.getOpinionMealsByOrderId();
  }
  public getOpinionMealsByOrderId(): void {
    this.opinionService.getOpinionMealsByOrderId(this.clientId).subscribe
    (results => {
      if(results.length===0){
        this.empty=true;
      }
      results = results.reduce((acc, {desiredDeliveryTime, orderPrice,
        orderedTime, orderId, tip, customerId, restaurantId, statusId
        ,restaurantName, comment, addressId, city, street, flatNumber,mealName,
        price,opinionComment,rating}) => {
        const existing = acc.find(i => i.orderId === orderId)
        if (existing) {
          existing.mealName.push(mealName)
          existing.price.push(price)
          existing.opinionComment.push(opinionComment)
          existing.rating.push(rating)}
        else {acc.push({orderId, mealName: [mealName],desiredDeliveryTime, orderPrice,
          orderedTime,tip, customerId, restaurantId, statusId
          ,restaurantName, comment, addressId, city, street, flatNumber,price: [price],opinionComment:[opinionComment],rating:[rating]})}
        return acc
      }, [])
      this.opinion$ = results;
      console.log(this.opinion$);
    } );
  }
  open(content) {
    this.modalService.open(content);
    console.log(this.element)
  }
}
