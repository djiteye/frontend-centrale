import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtagesuComponent } from './etagesu.component';

describe('EtagesuComponent', () => {
  let component: EtagesuComponent;
  let fixture: ComponentFixture<EtagesuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtagesuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtagesuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
