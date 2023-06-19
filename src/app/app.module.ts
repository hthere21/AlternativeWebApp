import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiComponent } from './ui/ui.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HandtrackerComponent } from './handtracker/handtracker.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HistoryPageComponent } from './history-page/history-page.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    UiComponent,
    HomePageComponent,
    HandtrackerComponent,
    HistoryPageComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
