import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { App } from './app.component';
import { PresidentComponent } from './president/president.component';
import { REPLComponent } from './facade/repl/repl.component';
import { FacadeModule } from './facade/facade.module';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatCardModule} from '@angular/material/card';
import { provideNativeDateAdapter} from '@angular/material/core';
import { DatepickerInlineCalendarComponent} from './inside/datepicker-inline-calendar/datepicker-inline-calendar.component'

@NgModule({
  declarations: [App, PresidentComponent, REPLComponent,DatepickerInlineCalendarComponent],
    imports: [BrowserModule,FacadeModule,AppRoutingModule,MatDatepickerModule,MatCardModule],
  providers: [provideBrowserGlobalErrorListeners(), provideClientHydration(),provideNativeDateAdapter()],
  bootstrap: [App],
})
export class AppModule {}
