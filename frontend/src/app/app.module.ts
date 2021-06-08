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
import {ClientPanelComponent} from './component/client-panel';
import {ClientProfileComponent} from './component/client-panel/client-profile';
import {ClientAdressComponent} from './component/client-panel/client-adress';
import {FavoriteRestaurantComponent} from './component/client-panel/favorite-restaurant';
import {OrderHistoryComponent} from './component/client-panel/order-history';
import {AngularFireModule} from '@angular/fire';
import {WeekPipe} from './component/courier-panel/Schedule/show-schedule/week.pipe';
import {MainComponent} from './component/main/main.component';
import {OrderCheckoutComponent} from './component/restaurant/order-checkout/order-checkout.component';
import {RestaurantMenuComponent} from './component/restaurant/restaurant-menu/restaurant-menu.component';
import {RestaurantSummaryComponent} from './component/restaurant/restaurant-summary/restaurant-summary.component';
import {RestaurantOrdersComponent} from './component/restaurant/restaurant-orders/restaurant-orders.component';
import {AdminPanelComponent} from './component/admin-panel/admin-panel.component';
import {RestaurantMenuUpdatePanelComponent} from './component/admin-panel/restaurant-menu-update-panel/restaurant-menu-update-panel.component';
import {MenusComponent} from './component/admin-panel/menus/menus.component';
import {CategoriesComponent} from './component/admin-panel/categories/categories.component';
import {HeroComponent} from './component/admin-panel/hero/hero.component';
import {ItemsComponent} from './component/admin-panel/items/items.component';
import {ListRestoComponent} from './component/admin-panel/list-resto/list-resto.component';
import {OrderItemComponent} from './component/admin-panel/overview/order-item/order-item.component';
import {OverviewComponent} from './component/admin-panel/overview/overview.component';
import {AngularFireStorageModule} from '@angular/fire/storage';


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
    AdminPanelComponent,                // ADMIN PANEL COMPONENTS {
    RestaurantMenuUpdatePanelComponent, //
    MenusComponent,                     //
    CategoriesComponent,                //
    ItemsComponent,                     //
    HeroComponent,                      //
    ListRestoComponent,                 //
    OrderItemComponent,                 //
    OverviewComponent,                  //
    MainComponent,
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
    RestaurantSummaryComponent,
    WeekPipe,
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
    FontAwesomeModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyC7CWGYVLRrx4jwmsC426nkEw99Wj9jEgs",
      authDomain: "masnaszamcia.firebaseapp.com",
      databaseURL: "https://masnaszamcia-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "masnaszamcia",
      storageBucket: "masnaszamcia.appspot.com",
      messagingSenderId: "833793167737",
      appId: "1:833793167737:web:6367af96965d4cc78d1fa8",
      measurementId: "G-Y8L2GJBD96"
    }),
    AngularFireStorageModule,
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
