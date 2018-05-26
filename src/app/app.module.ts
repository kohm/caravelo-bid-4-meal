import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BookingService } from './services/booking.service'
import {UIRouterModule} from "@uirouter/angular";

import {BidForMealComponent} from './app.component';
import { NavbarComponent } from './structure/global-navbar/navbar.component';
import { FooterComponent } from './structure/global-footer/footer.component';
import { MealsComponent } from './structure/meals/meals.component';
import { BadgesComponent } from './structure/badges/badges.component';
import { RewardsComponent } from './structure/rewards/rewards.component';
import { HelpComponent } from './structure/help/help.component';

let helloState = { name: 'navbar', url: '/navbar',  component: NavbarComponent };
let aboutState = { name: 'footer', url: '/footer',  component: FooterComponent };

@NgModule({
  declarations: [
    BidForMealComponent,
    NavbarComponent,
    FooterComponent,
    MealsComponent,
    BadgesComponent,
    RewardsComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UIRouterModule.forRoot({ states: [ helloState, aboutState ], useHash: true })
  ],
  providers: [BookingService],
  bootstrap: [BidForMealComponent]
})
export class AppModule {
}
