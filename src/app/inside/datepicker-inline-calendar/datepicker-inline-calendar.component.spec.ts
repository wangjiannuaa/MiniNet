import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatepickerInlineCalendar } from './datepicker-inline-calendar.component';

describe('DatepickerInlineCalendar', () => {
  let component: DatepickerInlineCalendar;
  let fixture: ComponentFixture<DatepickerInlineCalendar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatepickerInlineCalendar],
    }).compileComponents();

    fixture = TestBed.createComponent(DatepickerInlineCalendar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
