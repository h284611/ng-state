import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { ScoreboardModule } from './scoreboard/scoreboard.module';
import { CounterModule } from './counter/counter.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
    }),
    CounterModule,
    ScoreboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
