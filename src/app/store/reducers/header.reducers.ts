import { createReducer, on } from '@ngrx/store';
import { SortingAlgorithm } from 'src/app/shared/frontend-model/sorting-algorithm.enum';
import { HeaderActions } from '../actions/header.actions';

export const headerFeatureKey = 'mainState';

export interface HeaderState {
  algorithm: SortingAlgorithm;
}

export const initialState: HeaderState = {
  algorithm: SortingAlgorithm.BINARY_SEARCH,
};

export const reducer = createReducer(
  initialState,
  on(HeaderActions.selectAlgorithm, (state, { algorithm }) => {
    return { ...state, algorithm };
  })
);
