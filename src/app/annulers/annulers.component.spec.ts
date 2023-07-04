import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnulersComponent } from './annulers.component';

describe('AnnulersComponent', () => {
  let component: AnnulersComponent;
  let fixture: ComponentFixture<AnnulersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnulersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnulersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
