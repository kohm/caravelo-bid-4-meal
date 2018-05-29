import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BookingService} from './services/booking.service';
import {SelectionService} from './services/selection.service';
import {UIRouterModule} from '@uirouter/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {BidForMealComponent} from './app.component';
import {NavbarComponent} from './structure/global-navbar/navbar.component';
import {FooterComponent} from './structure/global-footer/footer.component';
import {MealsComponent} from './structure/meals/meals.component';
import {BadgesComponent} from './structure/badges/badges.component';
import {RewardsComponent} from './structure/rewards/rewards.component';
import {HelpComponent} from './structure/help/help.component';
import { JourneyBoardComponent } from './components/journey-board/journey-board.component';
import { JourneysComponent } from './structure/journeys/journeys.component';
import { BidCardComponent } from './components/bid-card/bid-card.component';

const defstate = {name: 'defstate', url: '', component: HelpComponent};
const journeys = {name: 'journeys', url: '/journeys', component: JourneysComponent};
const meals = {name: 'meals', url: '/meals', component: MealsComponent};
const badges = {name: 'badges', url: '/badges', component: BadgesComponent};
const rewards = {name: 'rewards', url: '/rewards', component: RewardsComponent};
const help = {name: 'help', url: '/help', component: HelpComponent};

@NgModule({
  declarations: [
    BidForMealComponent,
    NavbarComponent,
    FooterComponent,
    MealsComponent,
    BadgesComponent,
    RewardsComponent,
    HelpComponent,
    JourneyBoardComponent,
    JourneysComponent,
    BidCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    UIRouterModule.forRoot({
        states: [journeys, meals, badges, rewards, help, defstate],
        useHash: true
      }
    )
  ],
  providers: [BookingService, SelectionService],
  bootstrap: [BidForMealComponent]
})
export class BidForMeal {
}
