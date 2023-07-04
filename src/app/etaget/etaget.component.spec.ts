import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtagetComponent } from './etaget.component';

describe('EtagetComponent', () => {
  let component: EtagetComponent;
  let fixture: ComponentFixture<EtagetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtagetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtagetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
