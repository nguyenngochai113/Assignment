import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaikhoangComponent } from './taikhoang.component';

describe('TaikhoangComponent', () => {
  let component: TaikhoangComponent;
  let fixture: ComponentFixture<TaikhoangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaikhoangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaikhoangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
