import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-journey-board',
  templateUrl: './journey-board.component.html',
  styleUrls: ['./journey-board.component.scss']
})
export class JourneyBoardComponent implements OnInit {

  @Input() public name;
  @Input() public index;

  constructor() { }

  ngOnInit() {
  }

}
