import { Component, OnInit } from '@angular/core';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {faPlayCircle} from '@fortawesome/free-regular-svg-icons';
import {
  faCalendarAlt, faComments,
  faHistory,
  faListAlt,
  faLocationArrow, faQuestionCircle,
  faSearch,
  faUserCircle
} from '@fortawesome/free-solid-svg-icons';
import {ActivatedRoute, Router} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {DisplayMessage} from '../../shared/models/display-message';
import {Subject} from 'rxjs';
import {Courier} from '../Person/Employee/courier';


export const LINKS: object[] = [
  { title: 'Nawigacja', fragment: '/courier/navigation', icon: 'location-arrow' },
  { title: 'Lista zamówień', fragment: '/courier/orderlist', icon: 'list-alt'},
  { title: 'Czat', fragment: '/courier/chat', icon: 'comments'},
  { title: 'Grafik', fragment: '/courier/show-schedule', icon: 'calendar-alt'},
  { title: 'Mój profil', fragment: '/courier/profile', icon: 'user-circle'},
  { title: 'Historia zamówień', fragment: '/courier-orderhistory', icon: 'history'},
  { title: 'Wsparcie kuriera', fragment: '/courier/support', icon: 'question-circle'}
];

@Component({
  selector: 'app-courier-panel',
  templateUrl: './courier-panel.component.html',
  styleUrls: ['./courier-panel.component.css']
})
export class CourierPanelComponent implements OnInit {
  title = 'Panel kuriera';
  public courier: Courier[];
  links = LINKS;

  private ngUnsubscribe: Subject<void> = new Subject<void>();
  notification: DisplayMessage;
  returnUrl: string;

  constructor(private library: FaIconLibrary,
              private router: Router,
              private route: ActivatedRoute) {
    library.addIcons(faPlayCircle, faSearch,
      faListAlt, faLocationArrow, faCalendarAlt, faUserCircle, faQuestionCircle,
      faComments, faHistory);
  }

  ngOnInit(): void {
    this.route.params
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((params: DisplayMessage) => {
        this.notification = params;
      });
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }
}



