import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilenameBuilderComponent } from './filename-builder.component';

describe('FilenameBuilderComponent', () => {
  let component: FilenameBuilderComponent;
  let fixture: ComponentFixture<FilenameBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilenameBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilenameBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
