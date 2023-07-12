import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DechargesComponent } from './decharges.component';

describe('DechargesComponent', () => {
  let component: DechargesComponent;
  let fixture: ComponentFixture<DechargesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DechargesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DechargesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
