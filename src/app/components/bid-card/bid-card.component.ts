import {Component, Input, Output, OnInit} from '@angular/core';
import {trigger,  style,  animate,  transition} from '@angular/animations';
import {Bid} from "../../interfaces/bid";
import {SelectionService} from "../../services/selection.service";

@Component({
  selector: 'app-bid-card',
  templateUrl: './bid-card.component.html',
  styleUrls: ['./bid-card.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity:0}),
        animate(150, style({opacity:0.5}))
      ])
    ])
  ]})
export class BidCardComponent implements OnInit {
  @Input() public journeyKey;
  @Input() public description;
  @Input() public minPrice;
  @Input() public maxPrice;
  @Input() public mealId;
  @Input() public bidJump;
  @Input() public currency;
  public revealCard = false;
  private _bid: Bid;

  message: string;

  constructor(private selection: SelectionService) {
  }
  bid() {
    this._bid = {journeyKey: this.journeyKey, amount: this.maxPrice, currency: this.currency, mealId: this.mealId};
    this.selection.addSelection(this._bid);
  }

  ngOnInit() {
    this.selection.currentMessage.subscribe(message => this.message = JSON.stringify(message))
  }

}
