import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnulertComponent } from './annulert.component';

describe('AnnulertComponent', () => {
  let component: AnnulertComponent;
  let fixture: ComponentFixture<AnnulertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnulertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnulertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
