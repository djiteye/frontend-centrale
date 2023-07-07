import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtagettuComponent } from './etagettu.component';

describe('EtagettuComponent', () => {
  let component: EtagettuComponent;
  let fixture: ComponentFixture<EtagettuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtagettuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtagettuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
