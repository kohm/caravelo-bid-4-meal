import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BookingService} from './services/booking.service'
import {UIRouterModule} from "@uirouter/angular";

import {BidForMealComponent} from './app.component';
import {NavbarComponent} from './structure/global-navbar/navbar.component';
import {FooterComponent} from './structure/global-footer/footer.component';
import {MealsComponent} from './structure/meals/meals.component';
import {BadgesComponent} from './structure/badges/badges.component';
import {RewardsComponent} from './structure/rewards/rewards.component';
import {HelpComponent} from './structure/help/help.component';

let meals = {name: 'meals', url: '/meals', component: MealsComponent};
let badges = {name: 'badges', url: '/badges', component: BadgesComponent};
let rewards = {name: 'rewards', url: '/rewards', component: RewardsComponent};
let help = {name: 'help', url: '/help', component: HelpComponent};

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
    UIRouterModule.forRoot({
        states: [meals, badges, rewards, help],
        useHash: true
      }
    )
  ],
  providers: [BookingService],
  bootstrap: [BidForMealComponent]
})
export class AppModule {
}
