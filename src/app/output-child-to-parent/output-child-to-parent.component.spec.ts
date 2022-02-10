import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputChildToParentComponent } from './output-child-to-parent.component';

describe('OutputChildToParentComponent', () => {
  let component: OutputChildToParentComponent;
  let fixture: ComponentFixture<OutputChildToParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputChildToParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputChildToParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
