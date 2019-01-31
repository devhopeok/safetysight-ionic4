import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Signup5Page } from './signup5.page';

describe('Signup5Page', () => {
  let component: Signup5Page;
  let fixture: ComponentFixture<Signup5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Signup5Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Signup5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
