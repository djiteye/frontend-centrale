import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DechargetComponent } from './decharget.component';

describe('DechargetComponent', () => {
  let component: DechargetComponent;
  let fixture: ComponentFixture<DechargetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DechargetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DechargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
