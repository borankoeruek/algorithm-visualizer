import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { AlgoVisualizerComponent } from './modules/component/algo-visualizer/algo-visualizer.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: AlgoVisualizerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
