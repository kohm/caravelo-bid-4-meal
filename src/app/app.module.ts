import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BookingService } from './services/booking.service'

import {AppComponent} from './app.component';
import { NavbarComponent } from './structure/global-navbar/navbar.component';
import { FooterComponent } from './structure/global-footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [BookingService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
