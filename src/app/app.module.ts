import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { FacadeModule } from './facade/facade.module';
import { StorieeComponent } from './storiee/storiee.component';
import { AttendeeComponent } from './attendee/attendee.component';
import { App } from './app.component';
import { PresidentComponent } from './president/president.component';
import { DatepickerInlineCalendarComponent } from './inside/datepicker-inline-calendar/datepicker-inline-calendar.component';
import { AICommandHistoryListComponent } from './facade/aicommand-history-list/aicommand-history-list.component';

@NgModule({
  declarations: [
    App,
    PresidentComponent,
    DatepickerInlineCalendarComponent,
    StorieeComponent,
    AttendeeComponent,
    AICommandHistoryListComponent
  ],
  imports: [BrowserModule, FacadeModule, AppRoutingModule, MatDatepickerModule, MatCardModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(),
    provideNativeDateAdapter(),
  ],
  bootstrap: [App],
})
export class AppModule {}
