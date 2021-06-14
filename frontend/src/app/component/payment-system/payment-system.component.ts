import { Component, OnInit } from '@angular/core';
import {environment} from '../../EnvironmentVar';
import {loadStripe} from '@stripe/stripe-js/pure';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-payment-system',
  templateUrl: './payment-system.component.html',
  styleUrls: ['./payment-system.component.css']
})
export class PaymentSystemComponent {

// We load  Stripe
  stripePromise = loadStripe(environment.stripe);
  constructor(private http: HttpClient) {}

  async pay(): Promise<void> {
    // here we create a payment object
    const payment = {
      name: 'Iphone',
      currency: 'usd',
      // amount on cents *10 => to be on dollar
      amount: 100,
      quantity: '1',
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
