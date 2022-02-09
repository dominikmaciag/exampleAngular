import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrongDayComponent } from './strong-day.component';

describe('StrongDayComponent', () => {
  let component: StrongDayComponent;
  let fixture: ComponentFixture<StrongDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrongDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrongDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
