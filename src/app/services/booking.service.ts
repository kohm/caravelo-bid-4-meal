import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class BookingService {
  private _url: string = '/assets/server/booking.json';

  constructor(private _http: HttpClient) {};
  getBooking () {
    return this._http.get(this._url);
  }
}