import { ActionReducer, ActionReducerMap } from '@ngrx/store';
import * as fromHeader from './reducers/header.reducers';

export interface AppState {
  [fromHeader.headerFeatureKey]: fromHeader.HeaderState;
}

export const reducers: ActionReducerMap<AppState> = {
  [fromHeader.headerFeatureKey]: fromHeader.reducer,
};

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}
