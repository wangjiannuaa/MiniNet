import { Component } from '@angular/core';

@Component({
  selector: 'bw-datepicker-inline-calendar',
  standalone: false,
  styleUrl: './datepicker-inline-calendar.component.css',
  templateUrl: './datepicker-inline-calendar.component.html',
})
export class DatepickerInlineCalendarComponent {
  selected: Date | null;

    constructor(){
	this.selected=new Date();
    }



}
