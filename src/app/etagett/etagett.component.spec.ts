import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtagettComponent } from './etagett.component';

describe('EtagettComponent', () => {
  let component: EtagettComponent;
  let fixture: ComponentFixture<EtagettComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtagettComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtagettComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
