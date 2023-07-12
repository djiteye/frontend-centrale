import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DechargepComponent } from './dechargep.component';

describe('DechargepComponent', () => {
  let component: DechargepComponent;
  let fixture: ComponentFixture<DechargepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DechargepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DechargepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
