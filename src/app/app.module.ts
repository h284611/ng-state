import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { ScoreboardModule } from './scoreboard/scoreboard.module';

import { AppComponent } from './app.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
// import { scoreboardReducer } from './scoreboard/scoreboard.reducer';
import { counterReducer } from './counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ScoreboardComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      count: counterReducer
    }),
    ScoreboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
