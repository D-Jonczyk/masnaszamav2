import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {Meal} from '../model/meal.model';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {faPlusSquare, faShoppingCart, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {RestaurantMenuService} from '../restaurant-menu-service/restaurant-menu.service';

@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.css']
})
export class RestaurantMenuComponent implements OnInit {

  meals$: Observable<Meal[]>;
  orderMeals: Meal[];
  total: number;

  constructor(private route: ActivatedRoute,
              public library: FaIconLibrary,
              public restaurantMenuService: RestaurantMenuService) {
    library.addIcons(faPlusSquare, faTrashAlt, faShoppingCart);
  }

  ngOnInit(): void {
    this.orderMeals = [];
    this.total = 0;
    this.getMenu();
  }

  getMenu(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.meals$ = this.restaurantMenuService.getMeals(id);
  }

  addToOrder(meal): void {
    // this.orderMeals.push(meal);
    this.restaurantMenuService.orderMeals.push(meal);
    this.total += this.restaurantMenuService.orderMeals[this.restaurantMenuService.orderMeals.length - 1].price;
    this.restaurantMenuService.totalCost = this.total;
    this.orderMeals = this.restaurantMenuService.orderMeals;
  }

  deleteFromOrder(id): void {
    const removeIndex = this.restaurantMenuService.orderMeals.findIndex(meal => meal.id === id);
    this.total = this.total - this.restaurantMenuService.orderMeals[removeIndex].price;
    this.restaurantMenuService.orderMeals.splice(removeIndex, 1);
    this.restaurantMenuService.totalCost = this.total;
    this.orderMeals = this.restaurantMenuService.orderMeals;
  }

  checkOrder(): boolean {
    if(this.orderMeals.length > 0)
      return false;
    else
      return true;
  }
}
