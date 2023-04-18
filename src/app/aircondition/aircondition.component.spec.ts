import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirconditionComponent } from './aircondition.component';

describe('AirconditionComponent', () => {
  let component: AirconditionComponent;
  let fixture: ComponentFixture<AirconditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirconditionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirconditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
