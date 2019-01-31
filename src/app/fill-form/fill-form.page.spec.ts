import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillFormPage } from './fill-form.page';

describe('FillFormPage', () => {
  let component: FillFormPage;
  let fixture: ComponentFixture<FillFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
