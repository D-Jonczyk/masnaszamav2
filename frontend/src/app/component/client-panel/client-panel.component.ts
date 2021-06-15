import { Component, OnInit } from '@angular/core';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {faCheckCircle, faClock, faPlayCircle} from '@fortawesome/free-regular-svg-icons';
import {
  faCalendarAlt,  faCheckSquare, faClipboardList,  faCoffee, faComments, faFingerprint, faHandMiddleFinger,
  faHeadset, faHistory,  faInfo, faListAlt,  faLocationArrow,  faMapMarkerAlt, faPhoneAlt, faQuestionCircle, faSearch,
  faSquare,  faTruckLoading, faUserCircle, faSignOutAlt,faCrown,faQuestion, faDonate, faBullhorn
} from '@fortawesome/free-solid-svg-icons';


import {faGithub, faMedium} from '@fortawesome/free-brands-svg-icons';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {ClientPanel} from './client-panel';
import {ClientPanelService} from './client-panel-service';
import {AuthService, UserService} from '../../service';
import {AngularFireStorage} from '@angular/fire/storage';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import {finalize} from 'rxjs/operators';
import {User} from '../Person/user';
import {COURIERID} from '../courier-panel';
import {Courier} from '../Person/Employee/courier';
import {Router} from '@angular/router';
export const LINKS: object[] = [
  { title: 'Moj profil', fragment: '/client-panel', icon: 'user-circle' },
  { title: 'Lista Adresow', fragment: '/client-adress', icon: 'list-alt'},
  { title: 'Zamowienia', fragment: '/order-history', icon: 'history'},
  { title: 'Ulubione', fragment: '/favorite-restaurant', icon: 'crown'},
  { title: 'Opinie', fragment: '/opinion', icon: 'bullhorn'},
  { title: 'Pomoc', fragment: '/help', icon: 'question-circle'},
];

export let CLIENTID;


@Component({
  selector: 'app-client-panel',
  templateUrl: './client-panel.component.html',
  styleUrls: ['./client-panel.component.css'],

})

export class ClientPanelComponent implements OnInit {
  titel = 'Panel Klienta';
  links=LINKS;
  public clientName = this.clientPanelService.clientName;
  accPomLink=this.clientPanelService.accImgLink;
  filePath: string;
  public selectedFile: FileList;
  public clientProfile = new ClientPanel();
  public editProfile = new ClientPanel();
  public guard = 0;
  user:User;
  operationStatus = '';
  constructor(private library: FaIconLibrary,
              public clientPanelService: ClientPanelService,
              private userService: UserService,
              private afStorage: AngularFireStorage,
              private http: HttpClient,
              config: NgbModalConfig,
              private modalService: NgbModal,
              private authService: AuthService,
              private router: Router,
              ) {
    config.backdrop = 'static';
    config.keyboard = false;
    library.addIcons(faSquare, faCheckSquare, faMedium, faGithub, faClock, faMapMarkerAlt, faLocationArrow, faInfo, faTruckLoading,
      faClipboardList, faHeadset, faPhoneAlt, faCheckCircle, faPlayCircle, faListAlt, faLocationArrow,
      faCalendarAlt, faUserCircle, faQuestionCircle, faComments, faHistory,faSignOutAlt,faCrown,faQuestion,faBullhorn);
  }

  ngOnInit(): void {
    this.loadImage()
    this.userName()
    this.user = this.userService.currentUser;
    if(this.hasSignedIn()) {
      console.log('client-panel this.user: ', this.user);
      this.getClientProfileById(this.user.id);
    }
  }
  public onEditProfile(user: User): void {
    this.clientPanelService.editClientProfile(user).subscribe(
      (response: User) => {
        this.onSuccessAlert();
      },
      (error: HttpErrorResponse) => {
        this.onFailureAlert(error);
      }
    );
  }
  public onEditUrl(user: User): void {
    this.clientPanelService.editClientProfileUrl(user).subscribe(
      (response: User) => {
        this.onSuccessAlert();
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
  userName() {
    const user = this.userService.currentUser;
    this.clientPanelService.clientName = user.firstName;
    this.clientPanelService.clientLastName = user.lastName;
    return this.clientPanelService.clientName +' '+ this.clientPanelService.clientLastName;
  }
  loadImage(){
    const user = this.userService.currentUser;
    this.clientPanelService.accImgLink = user.imgUrl;
    this.accPomLink = user.imgUrl;
    return this.clientPanelService.accImgLink;
  }
  hasSignedIn() {
    return !!this.userService.currentUser;
  }
  upload(event) {
    this.filePath = event.target.files[0];
    this.guard = 1;
  }
  openImage(event){
    if(event.target.files && this.guard === 1){
      const reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      // tslint:disable-next-line:no-shadowed-variable
      reader.onload = (event: any) =>{
        this.accPomLink = event.target.result;
      }
    }
  }

  uploadImage(){
    if(this.guard === 1) {
      this.accPomLink = '/accLink' + new Date().getTime() + Math.random();
      console.log(this.filePath);
      const filePath = '/accImg' + this.accPomLink;
      const fileRef = this.afStorage.ref(filePath);
      this.afStorage.upload(filePath, this.filePath).snapshotChanges().pipe(
        finalize(()=>{
          fileRef.getDownloadURL().subscribe((url) => {
            this.clientPanelService.accImgLink=url;
            this.accPomLink=url;
            this.user.imgUrl=url;
          })
        })
      ).subscribe();
    }
  }

  getClientProfileById(id): void {
    this.clientPanelService.getClientProfileById(id).subscribe(
      (response: User) => {
        this.user = response;
        CLIENTID = response.id;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  open(content) {
    this.modalService.open(content);
  }
  logout() {
    this.authService.logout().subscribe(res => {
      this.router.navigate(['/login']);
    });
  }

}
