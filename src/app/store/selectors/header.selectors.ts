import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HeaderState, headerFeatureKey } from '../reducers/header.reducers';

export const selectAlgorithmFeature =
  createFeatureSelector<HeaderState>(headerFeatureKey);

export const selectedAlgorithm = createSelector(
  selectAlgorithmFeature,
  (state: HeaderState) => state.algorithm
);
