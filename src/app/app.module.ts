import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { App } from './app.component';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { PresidentComponent } from './president/president.component';
@NgModule({
  declarations: [App, PresidentComponent],
  imports: [BrowserModule, AppRoutingModule, MatSlideToggle],
  providers: [provideBrowserGlobalErrorListeners(), provideClientHydration()],
  bootstrap: [App],
})
export class AppModule {}
