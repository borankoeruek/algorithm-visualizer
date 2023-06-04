import { createReducer, on } from '@ngrx/store';
import { AlgoSelection } from 'src/app/shared/frontend-model/algo-selection.enum';
import { HeaderActions } from '../actions/header.actions';

export const headerFeatureKey = 'mainState';

export interface HeaderState {
  algorithm: AlgoSelection;
}

export const initialState: HeaderState = {
  algorithm: AlgoSelection.BINARY_SEARCH,
};

export const reducer = createReducer(
  initialState,
  on(HeaderActions.selectAlgorithm, (state, { algorithm }) => {
    return { ...state, algorithm };
  })
);
