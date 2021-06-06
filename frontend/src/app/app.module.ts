import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './home';
import {LoginComponent} from './login';
import {AdminGuard, GuestGuard, LoginGuard} from './guard';
import {NotFoundComponent} from './not-found';
import {AccountMenuComponent} from './component/header/account-menu/account-menu.component';
import {ApiCardComponent, FooterComponent, GithubComponent, HeaderComponent} from './component';

import {ApiService, AuthService, ConfigService, FooService, UserService} from './service';
import {ChangePasswordComponent} from './change-password';
import {ForbiddenComponent} from './forbidden';
import {AdminComponent} from './admin';
import {SignupComponent} from './signup';
import {AngularMaterialModule} from './angular-material/angular-material.module';
import {MatIconRegistry} from '@angular/material/icon';
import {FlexLayoutModule} from '@angular/flex-layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {CourierPanelComponent} from './component/courier-panel';
import {SupportComponent} from './component/courier-panel/support/support.component';
import {ShowScheduleComponent} from './component/courier-panel/Schedule/show-schedule/show-schedule.component';
import {ProfileComponent} from './component/courier-panel/profile/profile.component';
import {CourierOrderhistoryComponent} from './component/courier-panel/courier-orderhistory/courier-orderhistory.component';
import {OrderlistComponent} from './component/courier-panel/orderlist';
import {OrderCheckoutComponent} from './component/restaurant/order-checkout/order-checkout.component';
import {RestaurantMenuComponent} from './component/restaurant/restaurant-menu/restaurant-menu.component';
import {RestaurantOrdersComponent} from './component/restaurant/restaurant-orders/restaurant-orders.component';
import {RestaurantSummaryComponent} from './component/restaurant/restaurant-summary/restaurant-summary.component';
import {ClientAdressComponent} from './component/client-panel/client-adress/client-adress.component';
import {ClientProfileComponent} from './component/client-panel/client-profile/client-profile.component';
import {OrderHistoryComponent} from './component/client-panel/order-history/order-history.component';
import {ClientPanelComponent} from './component/client-panel/client-panel.component';
import {FavoriteRestaurantComponent} from './component/client-panel/favorite-restaurant/favorite-restaurant.component';


@NgModule({
  declarations: [
    CourierPanelComponent,         // COURIER PANEL COMPONENTS {
    SupportComponent,              //
    ShowScheduleComponent,         //
    ProfileComponent,              //
    CourierOrderhistoryComponent,  //
    OrderlistComponent,            // }
    ClientAdressComponent,          // CLIENT PANEL COMPONENTS {
    ClientPanelComponent,           //
    OrderHistoryComponent,          //
    ClientProfileComponent,         //
    FavoriteRestaurantComponent,    // }
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ApiCardComponent,
    HomeComponent,
    GithubComponent,
    LoginComponent,
    NotFoundComponent,
    AccountMenuComponent,
    ChangePasswordComponent,
    ForbiddenComponent,
    AdminComponent,
    SignupComponent,
    OrderCheckoutComponent,
    RestaurantMenuComponent,
    RestaurantOrdersComponent,
    RestaurantSummaryComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AngularMaterialModule,
    NgbModule,
    FontAwesomeModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    LoginGuard,
    GuestGuard,
    AdminGuard,
    FooService,
    AuthService,
    ApiService,
    UserService,
    ConfigService,
    MatIconRegistry
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
