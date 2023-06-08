import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { SortingAlgorithm } from 'src/app/shared/frontend-model/sorting-algorithm.enum';
import { AppState } from 'src/app/store';
import { HeaderActions } from 'src/app/store/actions/header.actions';
import { selectedAlgorithm } from 'src/app/store/selectors/header.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private readonly store: Store<AppState>) {}
  public sortingAlgorithm: typeof SortingAlgorithm = SortingAlgorithm;

  public ngOnInit(): void {
    this.store.pipe(select(selectedAlgorithm)).subscribe((state) => {
      console.log(state);
    });
  }

  public changeSelectedAlgo(algo: SortingAlgorithm): void {
    this.store.dispatch(HeaderActions.selectAlgorithm({ algorithm: algo }));
  }
}
