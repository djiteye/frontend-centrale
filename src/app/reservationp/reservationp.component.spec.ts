import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationpComponent } from './reservationp.component';

describe('ReservationpComponent', () => {
  let component: ReservationpComponent;
  let fixture: ComponentFixture<ReservationpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
