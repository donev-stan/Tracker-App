import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FitnessDashboardComponent } from './fitness-dashboard/fitness-dashboard.component';

const routes: Routes = [
  { path: '', component: FitnessDashboardComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FitnessTrackerRoutingModule {}
