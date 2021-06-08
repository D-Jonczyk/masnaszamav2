import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
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
import {RestaurantSummaryComponent} from './component/restaurant/restaurant-summary/restaurant-summary.component';
import {RestaurantMenuComponent} from './component/restaurant/restaurant-menu/restaurant-menu.component';
import {RestaurantOrdersComponent} from './component/restaurant/restaurant-orders/restaurant-orders.component';
import {OrderCheckoutComponent} from './component/restaurant/order-checkout/order-checkout.component';
import {MainComponent} from './component/main/main.component';
import {AdminPanelComponent} from './component/admin-panel/admin-panel.component';
import {CategoriesComponent} from './component/admin-panel/categories/categories.component';
import {RestaurantMenuUpdatePanelComponent} from './component/admin-panel/restaurant-menu-update-panel/restaurant-menu-update-panel.component';
import {ListRestoComponent} from './component/admin-panel/list-resto/list-resto.component';
import {ClientPanelComponent} from './component/client-panel';
import {ClientAdressComponent} from './component/client-panel/client-adress';
import {FavoriteRestaurantComponent} from './component/client-panel/favorite-restaurant';
import {OrderHistoryComponent} from './component/client-panel/order-history';
import {HelpComponent} from './component/client-panel/help';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
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
  {path: 'main', component: MainComponent},
  {path: 'admin-panel', component: AdminPanelComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'restaurant-menu-update-panel', component: RestaurantMenuUpdatePanelComponent},
  {path: 'list-resto', component: ListRestoComponent},
  {
    // client
    path: 'client-panel',
    component: ClientPanelComponent,
    pathMatch: 'full'
  },
  {
    // client
    path: 'client-adress',
    component: ClientAdressComponent,
    pathMatch: 'full'
  },
  {
    // client
    path: 'favorite-restaurant',
    component: FavoriteRestaurantComponent,
    pathMatch: 'full'
  },
  {
    // client
    path: 'help',
    component: HelpComponent,
    pathMatch: 'full'
  },
  {
    // client
    path: 'order-history',
    component: OrderHistoryComponent,
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
