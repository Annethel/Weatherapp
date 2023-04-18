import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayforecastComponent } from './dayforecast.component';

describe('DayforecastComponent', () => {
  let component: DayforecastComponent;
  let fixture: ComponentFixture<DayforecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayforecastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DayforecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
