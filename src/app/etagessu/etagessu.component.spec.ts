import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtagessuComponent } from './etagessu.component';

describe('EtagessuComponent', () => {
  let component: EtagessuComponent;
  let fixture: ComponentFixture<EtagessuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtagessuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtagessuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
