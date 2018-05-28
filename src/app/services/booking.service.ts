import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {map} from "rxjs/internal/operators";

@Injectable()
export class BookingService {
  private _url: string = '/assets/server/booking.json';

  constructor(private _http: HttpClient) {};

  getJourneys() {
    return this._http.get<any>(this._url).pipe(map(res => res.booking.journeys));
  }

  getMealsOptions() {
    return this._http.get<any>(this._url).pipe(map(res => res.options));
  }
}