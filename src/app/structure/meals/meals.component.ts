import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking.service'

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss']
})
export class MealsComponent implements OnInit {
  booking = {};
  constructor(private _bookingService: BookingService) {}

  ngOnInit() {
    console.log('asd');
    this._bookingService.getJourneys().subscribe(
      (resBookingData ) => {
        this.booking = JSON.stringify(resBookingData);
        console.log(resBookingData);
      }
    );
    this._bookingService.getMealsOptions().subscribe(
      (resBookingData ) => {
        this.booking = JSON.stringify(resBookingData);
        console.log(resBookingData);
      }
    )
  }

}
