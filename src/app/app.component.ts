import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class BidForMealComponent implements OnInit{
  booking = {};

  constructor() {}

  ngOnInit() {
  }
}
