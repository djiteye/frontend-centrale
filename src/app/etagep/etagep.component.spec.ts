import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtagepComponent } from './etagep.component';

describe('EtagepComponent', () => {
  let component: EtagepComponent;
  let fixture: ComponentFixture<EtagepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtagepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtagepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
