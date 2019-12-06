import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginalNameComponent } from './original-name.component';

describe('OriginalNameComponent', () => {
  let component: OriginalNameComponent;
  let fixture: ComponentFixture<OriginalNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OriginalNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OriginalNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
