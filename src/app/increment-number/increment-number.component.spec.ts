import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementNumberComponent } from './increment-number.component';

describe('IncrementNumberComponent', () => {
  let component: IncrementNumberComponent;
  let fixture: ComponentFixture<IncrementNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncrementNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncrementNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
