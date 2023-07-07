import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtagetuComponent } from './etagetu.component';

describe('EtagetuComponent', () => {
  let component: EtagetuComponent;
  let fixture: ComponentFixture<EtagetuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtagetuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtagetuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
