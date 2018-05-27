import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking.service'

@Component({
  selector: 'app-journeys',
  templateUrl: './journeys.component.html',
  styleUrls: ['./journeys.component.scss']
})
export class JourneysComponent implements OnInit {
  public journeys = [];
  constructor(private _bookingService: BookingService) {}

  ngOnInit() {
    console.log('asd');
    this._bookingService.getJourneys().subscribe(
      (resBookingData ) => {
        this.journeys = resBookingData;
        console.log(resBookingData);
      }
    );
  }

}
