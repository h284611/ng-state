import * as Scoreboard from './scoreboard.actions';

export interface ScoreboardState {
    home: number;
    away: number;
}

export const initialState: ScoreboardState = {
    home: 0,
    away: 0
};

export function scoreboardReducer(state: ScoreboardState = initialState, action: Scoreboard.ActionsUnion): ScoreboardState {
    switch (action.type) {
        case Scoreboard.ActionTypes.IncrementHome: {
            return {
                ...state,
                home: state.home + 1,
            };
        }

        case Scoreboard.ActionTypes.IncrementAway: {
            return {
                ...state,
                away: state.away + 1,
            };
        }

        case Scoreboard.ActionTypes.DecrementHome: {
            return {
                ...state,
                home: state.home - 1,
            };
        }

        case Scoreboard.ActionTypes.DecrementAway: {
            return {
                ...state,
                away: state.away - 1,
            };
        }

        case Scoreboard.ActionTypes.Reset: {
            return action.payload; // typed to { home: number, away: number }
        }

        default: {
            return state;
        }
    }
}
