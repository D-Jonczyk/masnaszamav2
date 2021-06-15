import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {Location} from '@angular/common';
import {RestaurantMenuService} from '../restaurant-menu-service/restaurant-menu.service';
import {OrderCheckoutService} from '../order-checkout-service/order-checkout.service';
import {Order} from '../model/Order';
import {Restaurant} from '../model/Restaurant';
import {Customer} from '../model/Customer';
import {Payment} from '../model/Payment';
import {OrderStatus} from '../model/OrderStatus';
import {routes} from '../../../app-routing.module';
import {Router} from '@angular/router';
import {environment} from '../../../EnvironmentVar';
import {loadStripe} from '@stripe/stripe-js/pure';
import {HttpClient} from '@angular/common/http';
import {Meal} from '../model/meal.model';

@Component({
  selector: 'app-order-checkout',
  templateUrl: './order-checkout.component.html',
  styleUrls: ['./order-checkout.component.css']
})
export class OrderCheckoutComponent implements OnInit {

  form: FormGroup;

  totalCost: number;

  private order: Order;
  stripePromise = loadStripe(environment.stripe);

  constructor(private formBuilder: FormBuilder,
              private library: FaIconLibrary,
              private restaurantMenu: RestaurantMenuService,
              private location: Location,
              private router: Router,
              private orderCheckoutService: OrderCheckoutService,
              private restaurantMenuService: RestaurantMenuService,
              private http: HttpClient) {
    library.addIcons(faShoppingCart);
    this.totalCost = restaurantMenu.totalCost;

  }

  ngOnInit(): void {

    this.form = this.formBuilder.group(
      {
        city: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
        street: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
        houseNumber: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
        email: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
        phoneNumber: ['', Validators.compose([Validators.required, Validators.minLength(9), Validators.maxLength(9)])]
      }
    );
  }

  backToPreviousPage(): void {
    this.location.back();
  }

  addNewOrder() : void
  {

    // this.router.navigateByUrl('payment-system');

    // this.order = new Order(1352, 300, new Customer(400),
    //   new Payment(100),1, '2020-01-01 12:12:12', 99,
    //   '2020-01-01 13:12:12', 2);
    //
    // this.orderCheckoutService.addNewOrder(this.order);
  }

  async pay(): Promise<void> {
    // here we create a payment object
    const payment = {
      name: 'masnaszama',
      currency: 'pln',
      // amount on cents *10 => to be on dollar
      amount: 10000,
      quantity: '1',
      meals: this.restaurantMenuService.orderMeals,
      cancelUrl: 'http://localhost:4200/payment-cancel',
      successUrl: 'http://localhost:4200/payment-success',
    };

    const stripe = await this.stripePromise;

    // this is a normal http calls for a backend api
    this.http
      .post(`${environment.serverUrl}`, payment)
      .subscribe((data: any) => {
        // I use stripe to redirect To Checkout page of Stripe platform
        stripe.redirectToCheckout({
          sessionId: data.id,
        });
      });
  }

}
