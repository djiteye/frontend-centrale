import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtageppComponent } from './etagepp.component';

describe('EtageppComponent', () => {
  let component: EtageppComponent;
  let fixture: ComponentFixture<EtageppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtageppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtageppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
