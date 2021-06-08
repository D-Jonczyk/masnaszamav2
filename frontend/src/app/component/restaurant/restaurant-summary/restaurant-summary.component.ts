import { Component, OnInit } from '@angular/core';
import { RestaurantSummary } from '../model/restaurant-summary.model';
import { RestaurantSummaryService } from '../restaurant-summary-service/restaurant-summary.service';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {faBicycle, faClock, faShoppingBag} from '@fortawesome/free-solid-svg-icons';
import {RestaurantMenuService} from '../restaurant-menu-service/restaurant-menu.service';


@Component({
  selector: 'app-restaurant-summary',
  templateUrl: './restaurant-summary.component.html',
  styleUrls: ['./restaurant-summary.component.css']
})
export class RestaurantSummaryComponent implements OnInit {

  restaurants$: Observable<RestaurantSummary[]>;
  openedCheckbox: boolean;
  freeDeliveryCheckbox: boolean;
  topRated: boolean;
  minOrderPrice: boolean;
  deliveryTime: boolean;
  alpha: boolean;
  deliveryCost: boolean;


  constructor(private restaurantService: RestaurantSummaryService,
              private restaurantMenuService: RestaurantMenuService,
              private router: Router,
              private location: Location,
              public library: FaIconLibrary) {

    this.restaurants$ = restaurantService.getRestaurant();
    this.library.addIcons(faShoppingBag, faBicycle, faClock);

    this.openedCheckbox = false;
    this.freeDeliveryCheckbox = false;
    this.topRated = false;
    this.minOrderPrice = false;
    this.deliveryTime = false;
    this.alpha = false;
    this.deliveryCost = false;
  }

  ngOnInit(): void {}

  backToPreviousPage(): void {
    this.location.back();
  }

  gotoRestaurantMenu(id, minOrderCost): void {
    this.restaurantMenuService.minOrderCost = minOrderCost;
      this.router.navigateByUrl('/restaurant-menu/'+id);
  }

  getOpened(e): void {

    if(e.target.checked)
    {
      this.openedCheckbox = true;

      this.freeDeliveryCheckbox = false;
      this.topRated = false;
      this.deliveryTime = false;
      this.alpha = false;
      this.deliveryCost = false;
      this.getRestaurants();
    }

    if(!e.target.checked)
    {
      console.log('opened - false');
      this.openedCheckbox = false;
      this.getRestaurants();
    }
  }

  getFreeDelivery(e): void {

    if(e.target.checked)
    {
      this.freeDeliveryCheckbox = true;

      this.openedCheckbox = false;
      this.topRated = false;
      this.deliveryTime = false;
      this.alpha = false;
      this.deliveryCost = false;
      this.getRestaurants();
    }

    if(!e.target.checked)
    {
      console.log('freeDelivery - false');
      this.freeDeliveryCheckbox = false;
      this.getRestaurants();
    }
  }

  selectFilter(e): void {

    switch(e.target.value) {
      case 'topRated':
        this.topRated = true;
        this.freeDeliveryCheckbox = false;
        this.minOrderPrice = false;
        this.openedCheckbox = false;
        this.deliveryTime = false;
        this.alpha = false;
        this.deliveryCost = false;
        this.getRestaurants();
        break;
      case 'minOrderPrice':
        this.minOrderPrice = true;
        this.topRated = false;
        this.freeDeliveryCheckbox = false;
        this.openedCheckbox = false;
        this.deliveryTime = false;
        this.alpha = false;
        this.deliveryCost = false;
        this.getRestaurants();
        break;
      case 'deliveryTime':
        this.deliveryTime = true;
        this.minOrderPrice = false;
        this.topRated = false;
        this.freeDeliveryCheckbox = false;
        this.openedCheckbox = false;
        this.alpha = false;
        this.deliveryCost = false;
        this.getRestaurants();
        break;
      case 'alpha':
        this.alpha = true;
        this.deliveryTime = false;
        this.minOrderPrice = false;
        this.topRated = false;
        this.freeDeliveryCheckbox = false;
        this.openedCheckbox = false;
        this.deliveryCost = false;
        this.getRestaurants();
        break;
      case 'deliveryCost':
        this.deliveryCost = true;
        this.alpha = false;
        this.deliveryTime = false;
        this.minOrderPrice = false;
        this.topRated = false;
        this.freeDeliveryCheckbox = false;
        this.openedCheckbox = false;
        this.getRestaurants();
        break;
      default:
        this.getRestaurants();
        break;
    }
  }

  getRestaurants(): void {

    if(this.openedCheckbox === true)
    {
      this.restaurants$ = this.restaurantService.getOpenedRestaurant();
    }
    else if(this.freeDeliveryCheckbox === true)
    {
      this.restaurants$ = this.restaurantService.getFreeDeliveryRestaurant();
    }
    else if(this.topRated === true)
    {
      this.restaurants$ = this.restaurantService.getByRatingRestaurant();
    }
    else if(this.deliveryCost === true)
    {
      this.restaurants$ = this.restaurantService.getByDeliveryCost();
    }
    else if(this.deliveryTime === true)
    {
      this.restaurants$ = this.restaurantService.getByDeliveryTime();
    }
    else if(this.minOrderPrice === true)
    {
      this.restaurants$ = this.restaurantService.getByOrderCostRestaurant();
    }
    else if(this.alpha === true)
    {
      this.restaurants$ = this.restaurantService.getByAlpha();
    }
    else
    {
      console.log('all');
      this.restaurants$ = this.restaurantService.getRestaurant();
    }

  }
}

