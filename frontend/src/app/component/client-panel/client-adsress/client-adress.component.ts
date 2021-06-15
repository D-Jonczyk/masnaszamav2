import { Component, OnInit } from '@angular/core';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {faCheckCircle, faClock, faPlayCircle} from '@fortawesome/free-regular-svg-icons';
import {
  faCalendarAlt, faCheckSquare, faClipboardList, faCoffee, faComments, faFingerprint, faHandMiddleFinger,
  faHeadset, faHistory, faInfo, faListAlt, faLocationArrow, faMapMarkerAlt, faPhoneAlt, faQuestionCircle, faSearch,
  faSquare, faTruckLoading, faUserCircle, faSignOutAlt, faCrown, faQuestion, faBullhorn, faMapMarker, faCity, faRoad, faListOl, faRetweet
} from '@fortawesome/free-solid-svg-icons';
import {Customer} from '../../Person/customer';
import {CLIENTID, LINKS} from '../client-panel.component';
import {faGithub, faMedium} from '@fortawesome/free-brands-svg-icons';
import {ClientPanelService} from '../client-panel-service';
import {OrderHistory} from '../order-history/order-history';
import {HttpErrorResponse} from '@angular/common/http';
import {ClientAddress} from './client-address';
import {ClientAddressService} from './client-address-service';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import {OrderAddress} from './order-address';
import {User} from '../../Person/user';


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
  empty=false;
  clientAddress: ClientAddress;
  operationStatus = '';
  public orderAddress: OrderAddress[];
  constructor(private library: FaIconLibrary,
              public clientAddressService:ClientAddressService,
              public clientPanelService:ClientPanelService,
              config: NgbModalConfig,
              private modalService: NgbModal
              ) {
    config.backdrop = 'static';
    config.keyboard = false;
    library.addIcons(faSquare, faCheckSquare, faMedium, faGithub, faClock, faMapMarkerAlt, faLocationArrow, faInfo, faTruckLoading,
      faClipboardList, faHeadset, faPhoneAlt, faCheckCircle, faPlayCircle, faListAlt, faLocationArrow,
      faCalendarAlt, faUserCircle, faQuestionCircle, faComments, faHistory,faSignOutAlt,faCrown,faQuestion,faBullhorn, faMapMarkerAlt,
      faCity, faMapMarker, faRoad, faListOl,faRetweet);
  }

  ngOnInit(): void {
    this.getAddressByUserId();
    this.getAddressFromOrder();
  }
  public getAddressByUserId(): void {
    this.clientAddressService.getAddressByUserId(this.clientId).subscribe(
      (response: ClientAddress) => {
        if(response === null){
          this.empty = true;
        }else {
          this.clientAddress = response;
        }
      }
    );
  }
  public getAddressFromOrder(): void {
    this.clientAddressService.getAddressFromOrder(this.clientId).subscribe(
      (response: OrderAddress[]) => {
        if(response.length===0){
          this.empty = true;
        }else{
          this.orderAddress = response;
        }
      }
    );
  }
  public onEditAddress(clientAddress: ClientAddress): void {
    this.clientAddressService.editAddress(clientAddress).subscribe(
      (response: ClientAddress) => {
        this.onSuccessAlert();
        console.log(this.clientAddress.addressId)
      },
      (error: HttpErrorResponse) => {
        this.onFailureAlert(error);
      }
    );
  }
  onSuccessAlert(): void {
    this.operationStatus = 'success';
  }

  onFailureAlert(error: HttpErrorResponse): void {
    alert('Wystąpił błąd przy zapisywaniu danych, błąd: ' + error.message);
    this.operationStatus = 'fail';
  }
  open(content) {
    this.modalService.open(content);
  }
}
