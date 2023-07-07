import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtagepuComponent } from './etagepu.component';

describe('EtagepuComponent', () => {
  let component: EtagepuComponent;
  let fixture: ComponentFixture<EtagepuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtagepuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtagepuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
