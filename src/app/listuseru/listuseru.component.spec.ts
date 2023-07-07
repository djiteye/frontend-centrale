import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListuseruComponent } from './listuseru.component';

describe('ListuseruComponent', () => {
  let component: ListuseruComponent;
  let fixture: ComponentFixture<ListuseruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListuseruComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListuseruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
