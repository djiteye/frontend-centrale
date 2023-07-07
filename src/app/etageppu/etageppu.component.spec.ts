import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtageppuComponent } from './etageppu.component';

describe('EtageppuComponent', () => {
  let component: EtageppuComponent;
  let fixture: ComponentFixture<EtageppuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtageppuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtageppuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
