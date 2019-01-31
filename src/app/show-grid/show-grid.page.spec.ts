import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowGridPage } from './show-grid.page';

describe('ShowGridPage', () => {
  let component: ShowGridPage;
  let fixture: ComponentFixture<ShowGridPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowGridPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowGridPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
