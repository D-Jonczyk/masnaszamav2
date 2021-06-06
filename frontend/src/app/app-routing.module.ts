import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home';
import {LoginComponent} from './login';
import {AdminComponent} from './admin';
import {AdminGuard, GuestGuard, LoginGuard} from './guard';
import {NotFoundComponent} from './not-found';
import {ChangePasswordComponent} from './change-password';
import {ForbiddenComponent} from './forbidden';
import {SignupComponent} from './signup';
import {RestaurantMenuComponent} from "./Restaurant/restaurant-menu/restaurant-menu.component";
import {OrderCheckoutComponent} from "./Restaurant/order-checkout/order-checkout.component";
import {RestaurantOrdersComponent} from "./Restaurant/restaurant-orders/restaurant-orders.component";
import {RestaurantSummaryComponent} from "./Restaurant/restaurant-summary/restaurant-summary.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [GuestGuard],
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [GuestGuard]
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard]
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '403',
    component: ForbiddenComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  },
  {
    path: 'restaurant-orders',
    component: RestaurantOrdersComponent
  },
  {
    path: 'order-checkout',
    component: OrderCheckoutComponent},
  {
    path: 'restaurant-menu/:id',
    component: RestaurantMenuComponent
  },
  {
    path: 'restaurant-summary',
    component: RestaurantSummaryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
