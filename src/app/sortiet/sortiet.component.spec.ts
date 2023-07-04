import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortietComponent } from './sortiet.component';

describe('SortietComponent', () => {
  let component: SortietComponent;
  let fixture: ComponentFixture<SortietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortietComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
