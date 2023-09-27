import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    pathMatch: 'full',
  },
  {
    path: 'food-tracker',
    loadChildren: () =>
      import('./food-tracker/food-tracker.module').then(
        (m) => m.FoodTrackerModule
      ),
  },
  {
    path: 'fitness-tracker',
    loadChildren: () =>
      import('./fitness-tracker/fitness-tracker.module').then(
        (m) => m.FitnessTrackerModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
