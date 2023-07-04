import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtagessComponent } from './etagess.component';

describe('EtagessComponent', () => {
  let component: EtagessComponent;
  let fixture: ComponentFixture<EtagessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtagessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtagessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
