/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RadarchartComponent } from './radarchart.component';

describe('RadarchartComponent', () => {
  let component: RadarchartComponent;
  let fixture: ComponentFixture<RadarchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadarchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
