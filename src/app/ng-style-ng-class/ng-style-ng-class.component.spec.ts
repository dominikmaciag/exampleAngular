import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgStyleNgClassComponent } from './ng-style-ng-class.component';

describe('NgStyleNgClassComponent', () => {
  let component: NgStyleNgClassComponent;
  let fixture: ComponentFixture<NgStyleNgClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgStyleNgClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgStyleNgClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
