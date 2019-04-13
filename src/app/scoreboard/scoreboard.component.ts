import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ScoreboardState, initialState } from './scoreboard.reducer';
import * as ScroreboardActions from './scoreboard.actions';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {

  private homeScore$: number;
  private awayScore$: number;
  private score: Observable<ScoreboardState>;

  constructor(
    private store: Store<{ count: number }>) {
    this.score = this.store.pipe(select('game'));
    this.score.subscribe((event) => {
      this.homeScore$ = event.home;
      this.awayScore$ = event.away;
    });
  }

  ngOnInit() {
  }

  incrementHome() {
    this.store.dispatch(new ScroreboardActions.IncrementHome());
  }

  decrementHome() {
    this.store.dispatch(new ScroreboardActions.DecrementHome());
  }

  incrementAway() {
    this.store.dispatch(new ScroreboardActions.IncrementAway());
  }

  decrementAway() {
    this.store.dispatch(new ScroreboardActions.DecrementAway());
  }

  reset() {
    this.store.dispatch(new ScroreboardActions.Reset(initialState));
  }
}
