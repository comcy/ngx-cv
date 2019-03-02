import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCvComponent } from './ngx-cv.component';

describe('NgxCvComponent', () => {
  let component: NgxCvComponent;
  let fixture: ComponentFixture<NgxCvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxCvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
