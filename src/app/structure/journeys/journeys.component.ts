import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking.service';
import {SelectionService} from '../../services/selection.service';

@Component({
  selector: 'app-journeys',
  templateUrl: './journeys.component.html',
  styleUrls: ['./journeys.component.scss']
})
export class JourneysComponent implements OnInit {
  public journeys = [];
  public viewData = false;
  public ouputJsonResponse = {};
  constructor(private _bookingService: BookingService, private selection: SelectionService) {}

  ngOnInit() {
    this._bookingService.getJourneys().subscribe(
      (resBookingData ) => {
        this.journeys = resBookingData;
      }
    );
    this.selection.currentMessage.subscribe(ouputJsonResponse => this.ouputJsonResponse = ouputJsonResponse);
  }

}
