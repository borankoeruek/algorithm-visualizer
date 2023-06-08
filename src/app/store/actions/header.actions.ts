import { createActionGroup, props } from '@ngrx/store';
import { SortingAlgorithm } from 'src/app/shared/frontend-model/sorting-algorithm.enum';

export const HeaderActions = createActionGroup({
  source: 'Header',
  events: {
    'Select Algorithm': props<{ algorithm: SortingAlgorithm }>(),
  },
});
