import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {trigger,  style,  animate,  transition} from '@angular/animations';
import {Bid} from '../../interfaces/bid';
import {SelectionService} from '../../services/selection.service';

@Component({
  selector: 'app-bid-card',
  templateUrl: './bid-card.component.html',
  styleUrls: ['./bid-card.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity: 0}),
        animate(150, style({opacity: 0.5}))
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
  @Input() public disabledCard;
  @Output() bidded: EventEmitter<Boolean> = new EventEmitter();
  public revealCard = false;
  public cardBidded = false;
  public amount = 0;
  private _bid: Bid;
  private disableInBid = true;
  private disableDecBid = false;
  private disableControllers = false;

  message: string;

  constructor(private selection: SelectionService) {
  }
  bid() {
    this._bid = {journeyKey: this.journeyKey, amount: this.amount, currency: this.currency, mealId: this.mealId};
    this.selection.addSelection(this._bid);
    this.disableControllers = true;
    this.revealCard = false;
    this.cardBidded = true;
    this.bidded.emit(true);
  }

  decreaseBid() {
    if ((this.amount - this.bidJump) > this.minPrice) {
      this.amount = this.amount - this.bidJump;
    } else {
      this.amount = this.minPrice;
      this.disableDecBid = true;
    }
  }

  increaseBid() {
    if ((this.amount + this.bidJump) < this.maxPrice) {
      this.amount = this.amount + this.bidJump;
    } else {
      this.amount = this.maxPrice;
      this.disableInBid = true;
    }
  }

  ngOnInit() {
    this.selection.currentMessage.subscribe(message => this.message = JSON.stringify(message));
    this.amount = this.maxPrice || 0;
  }

}
