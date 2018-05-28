import { Injectable } from '@angular/core';
import { Observable} from "rxjs/index";
import {BehaviorSubject} from 'rxjs';
import {Selection} from "../interfaces/selection";
import {Bid} from "../interfaces/bid";

@Injectable()
export class SelectionService {

  private _finalSelection = {
    selection: []
  }

  private messageSource = new BehaviorSubject<any>(null);
  currentMessage = this.messageSource.asObservable();
  constructor() { }

  addSelection(selection: any) {
    this._finalSelection.selection.push(selection);
    this.messageSource.next(this._finalSelection);
  }

}
