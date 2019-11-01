import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XacnhanemailComponent } from './xacnhanemail.component';

describe('XacnhanemailComponent', () => {
  let component: XacnhanemailComponent;
  let fixture: ComponentFixture<XacnhanemailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XacnhanemailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XacnhanemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
