import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BookingService } from './services/booking.service'
import {UIRouterModule} from "@uirouter/angular";

import {AppComponent} from './app.component';
import { NavbarComponent } from './structure/global-navbar/navbar.component';
import { FooterComponent } from './structure/global-footer/footer.component';

let helloState = { name: 'navbar', url: '/navbar',  component: NavbarComponent };
let aboutState = { name: 'footer', url: '/footer',  component: FooterComponent };

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UIRouterModule.forRoot({ states: [ helloState, aboutState ], useHash: true })
  ],
  providers: [BookingService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
