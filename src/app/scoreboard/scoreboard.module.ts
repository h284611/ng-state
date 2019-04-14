import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { scoreboardReducer } from './scoreboard.reducer';
import { ScoreboardComponent } from './scoreboard.component';

@NgModule({
    declarations: [
        ScoreboardComponent
    ],
    imports: [
        StoreModule.forFeature('game', scoreboardReducer)
    ],
    exports: [
        ScoreboardComponent
    ]
})
export class ScoreboardModule { }
