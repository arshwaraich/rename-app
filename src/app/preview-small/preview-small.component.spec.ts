import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewSmallComponent } from './preview-small.component';

describe('PreviewSmallComponent', () => {
  let component: PreviewSmallComponent;
  let fixture: ComponentFixture<PreviewSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
