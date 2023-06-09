import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtagesComponent } from './etages.component';

describe('EtagesComponent', () => {
  let component: EtagesComponent;
  let fixture: ComponentFixture<EtagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
