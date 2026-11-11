import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { FacadeModule } from './facade/facade.module';
import { StorieeComponent } from './storiee/storiee.component';
import { AttendeeComponent } from './attendee/attendee.component';
import { App } from './app.component';
import { PresidentComponent } from './president/president.component';
import { DatepickerInlineCalendarComponent } from './inside/datepicker-inline-calendar/datepicker-inline-calendar.component';
import { AICommandHistoryListComponent } from './facade/aicommand-history-list/aicommand-history-list.component';
import { REPLComponent } from './facade/repl/repl.component';
import { SelfTestOnLaunchComponent } from './self-test-on-launch/self-test-on-launch.component';
import { MatTableModule } from '@angular/material/table';
import { LayoutdirectorComponent } from './layoutdirector/layoutdirector.component';
import { LayoutpageComponent } from './layoutpage/layoutpage.component';
import { LayoutpagegroupComponent } from './layoutpagegroup/layoutpagegroup.component';
@NgModule({
  declarations: [
    App,
    PresidentComponent,
    DatepickerInlineCalendarComponent,
    StorieeComponent,
    AttendeeComponent,
    AICommandHistoryListComponent,
    REPLComponent,
    SelfTestOnLaunchComponent,
    LayoutdirectorComponent,
    LayoutpageComponent,
    LayoutpagegroupComponent,
  ],
  imports: [
    BrowserModule,
    FacadeModule,
    MatAutocompleteModule,
    AppRoutingModule,
    MatDatepickerModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(),
    provideNativeDateAdapter(),
  ],
  bootstrap: [App],
})
export class AppModule {}
