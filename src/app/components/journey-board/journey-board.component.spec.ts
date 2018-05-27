import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyBoardComponent } from './journey-board.component';

describe('JourneyBoardComponent', () => {
  let component: JourneyBoardComponent;
  let fixture: ComponentFixture<JourneyBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JourneyBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JourneyBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
