import { Component, OnInit, Input } from '@angular/core';
import { BookingService } from '../../services/booking.service'

@Component({
  selector: 'app-journey-board',
  templateUrl: './journey-board.component.html',
  styleUrls: ['./journey-board.component.scss']
})
export class JourneyBoardComponent implements OnInit {
  @Input() public name;
  @Input() public index;
  public mealOptions = [];

  constructor(private _bookingService: BookingService) {}

  ngOnInit() {
    this._bookingService.getMealsOptions().subscribe(
      (resBookingData ) => {
        this.mealOptions = Object.keys(resBookingData).map(i => resBookingData[i]);
        console.log(resBookingData);
      }
    )
  }

}
