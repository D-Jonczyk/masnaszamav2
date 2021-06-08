import { Component, OnInit } from '@angular/core';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {faCheckCircle, faClock, faPlayCircle} from '@fortawesome/free-regular-svg-icons';
import {
  faCalendarAlt,  faCheckSquare, faClipboardList,  faCoffee, faComments, faFingerprint, faHandMiddleFinger,
  faHeadset, faHistory,  faInfo, faListAlt,  faLocationArrow,  faMapMarkerAlt, faPhoneAlt, faQuestionCircle, faSearch,
  faSquare,  faTruckLoading, faUserCircle, faSignOutAlt,faCrown,faQuestion
} from '@fortawesome/free-solid-svg-icons';


import {faGithub, faMedium} from '@fortawesome/free-brands-svg-icons';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {ClientPanel} from './client-panel';
import {ClientPanelService} from './client-panel-service';
import {UserService} from '../../service';
import {AngularFireStorage} from '@angular/fire/storage';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import {finalize} from 'rxjs/operators';

export const LINKS: object[] = [
  { title: 'Moj profil', fragment: '/client-panel', icon: 'user-circle' },
  { title: 'Lista Adresow', fragment: '/client-adress', icon: 'list-alt'},
  { title: 'Historia zamowien', fragment: '/order-history', icon: 'history'},
  { title: 'Ulubione', fragment: '/favorite-restaurant', icon: 'crown'},
  { title: 'Pomoc', fragment: '/help', icon: 'question-circle'},
];



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
  constructor(private library: FaIconLibrary,
              public clientPanelService: ClientPanelService,
              private userService: UserService,
              private afStorage: AngularFireStorage,
              private http: HttpClient,
              config: NgbModalConfig,
              private modalService: NgbModal
              ) {
    config.backdrop = 'static';
    config.keyboard = false;
    library.addIcons(faSquare, faCheckSquare, faMedium, faGithub, faClock, faMapMarkerAlt, faLocationArrow, faInfo, faTruckLoading,
      faClipboardList, faHeadset, faPhoneAlt, faCheckCircle, faPlayCircle, faListAlt, faLocationArrow,
      faCalendarAlt, faUserCircle, faQuestionCircle, faComments, faHistory,faSignOutAlt,faCrown,faQuestion);
  }

  ngOnInit(): void {
    this.loadImage()
    this.userName()
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
    return this.clientPanelService.accImgLink;
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
          })
        })
      ).subscribe();
    }
  }

  public onEditClientProfile(client: ClientPanel): void {
    this.clientPanelService.editClientProfile(client).subscribe(
      (response: ClientPanel) => {
        console.log(response);
        this.getClientProfile();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        this.getClientProfile();
      }
    );
  }

  getClientProfile(): void {
    this.clientPanelService.getClientProfile(this.clientPanelService.userId).subscribe(
      (response: ClientPanel) => {
        this.clientProfile = response;
        this.editProfile = this.clientProfile;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  open(content) {
    this.modalService.open(content);
  }

}
