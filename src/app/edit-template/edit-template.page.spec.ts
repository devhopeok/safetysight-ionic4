import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTemplatePage } from './edit-template.page';

describe('EditTemplatePage', () => {
  let component: EditTemplatePage;
  let fixture: ComponentFixture<EditTemplatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTemplatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTemplatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
