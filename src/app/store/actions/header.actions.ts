import { createActionGroup, props } from '@ngrx/store';
import { AlgoSelection } from 'src/app/shared/frontend-model/algo-selection.enum';

export const HeaderActions = createActionGroup({
  source: 'Header',
  events: {
    'Select Algorithm': props<{ algorithm: AlgoSelection }>(),
  },
});
