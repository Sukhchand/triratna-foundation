import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsPopupComponent } from './news-popup.component';

describe('NewsPopupComponent', () => {
  let component: NewsPopupComponent;
  let fixture: ComponentFixture<NewsPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
