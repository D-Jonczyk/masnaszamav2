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
import {CourierPanelComponent} from './component/courier-panel';
import {OrderlistComponent} from './component/courier-panel/orderlist';
import {SupportComponent} from './component/courier-panel/support/support.component';
import {ProfileComponent} from './component/courier-panel/profile/profile.component';
import {CourierOrderhistoryComponent} from './component/courier-panel/courier-orderhistory/courier-orderhistory.component';
import {ShowScheduleComponent} from './component/courier-panel/Schedule/show-schedule/show-schedule.component';
import {OrderCheckoutComponent} from './component/restaurant/order-checkout/order-checkout.component';
import {RestaurantMenuComponent} from './component/restaurant/restaurant-menu/restaurant-menu.component';
import {RestaurantOrdersComponent} from './component/restaurant/restaurant-orders/restaurant-orders.component';
import {RestaurantSummaryComponent} from './component/restaurant/restaurant-summary/restaurant-summary.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    // courier
    path: 'courier-panel',
    component: CourierPanelComponent,
    pathMatch: 'full'
  },
  {
    // courier
    path: 'courier/orderlist',
    component: OrderlistComponent,
    pathMatch: 'full'
  },
  {
    // courier
    path: 'courier/support',
    component: SupportComponent,
    pathMatch: 'full'
  },
  {
    path: 'courier/profile',
    component: ProfileComponent,
    pathMatch: 'full'
  },
  {
    // courier
    path: 'courier-orderhistory',
    component: CourierOrderhistoryComponent,
    pathMatch: 'full'
  },
  {
    // courier
    path: 'courier/show-schedule',
    component: ShowScheduleComponent,
    pathMatch: 'full'
  },
  {path: 'order-checkout', component: OrderCheckoutComponent},
  {path: 'restaurant-orders', component: RestaurantOrdersComponent},
  {path: 'restaurant-menu/:id', component: RestaurantMenuComponent},
  {path: 'restaurant-summary', component: RestaurantSummaryComponent},
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
