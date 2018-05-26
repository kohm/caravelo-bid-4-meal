import { Component, OnInit } from '@angular/core';
import { BookingService } from './services/booking.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../styles.scss']
})
export class BidForMealComponent implements OnInit{
  booking = {};

  constructor(private _bookingService: BookingService) {}

  ngOnInit() {
    console.log('asd');
    this._bookingService.getBooking().subscribe(
      (resBookingData ) => {
        this.booking = JSON.stringify(resBookingData);
        console.log(resBookingData);
      }
    )
  }
  title = 'app';
}
