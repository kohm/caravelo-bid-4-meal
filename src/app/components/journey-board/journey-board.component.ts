import { Component, OnInit, Input } from '@angular/core';
import { BookingService } from '../../services/booking.service'

@Component({
  selector: 'app-journey-board',
  templateUrl: './journey-board.component.html',
  styleUrls: ['./journey-board.component.scss']
})
export class JourneyBoardComponent implements OnInit {
  @Input() public name;
  @Input() public journeyData;
  @Input() public index;
  public mealOptions = [];
  public collapsed = true;
  public showMealOptions = true;
  private disableCard = false;
  private flightNumber:string;
  private departureIata:string;
  private arrivalIata:string;
  private departureDate:string;
  private arrivalDate:string;

  constructor(private _bookingService: BookingService) {
  }

  ngOnInit() {
    this.flightNumber = this.journeyData.flight;
    this.departureIata = this.journeyData.departure;
    this.arrivalIata = this.journeyData.arrival;
    this.departureDate = this.journeyData.departureDate;
    this.arrivalDate = this.journeyData.arrivalDate;


    this._bookingService.getMealsOptions().subscribe(
      (resBookingData ) => {
        this.mealOptions = Object.keys(resBookingData).map(i => resBookingData[i]);
      }
    )
  }

  disableBidCards() {
    this.disableCard = true;
  }

}
