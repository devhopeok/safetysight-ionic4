import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Signup4Page } from './signup4.page';

describe('Signup4Page', () => {
  let component: Signup4Page;
  let fixture: ComponentFixture<Signup4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Signup4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Signup4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
