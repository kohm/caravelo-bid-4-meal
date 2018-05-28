import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Bid} from "../interfaces/bid";

@Injectable()
export class SelectionService {

  private _finalSelection = {
    selection: []
  };

  private messageSource = new BehaviorSubject<any>(null);
  currentMessage = this.messageSource.asObservable();
  constructor() { }

  addSelection(selection: Bid) {
    this._finalSelection.selection.push(selection);
    this.messageSource.next(this._finalSelection);
  }

}
