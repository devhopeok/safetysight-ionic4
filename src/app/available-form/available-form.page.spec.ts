import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableFormPage } from './available-form.page';

describe('AvailableFormPage', () => {
  let component: AvailableFormPage;
  let fixture: ComponentFixture<AvailableFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
