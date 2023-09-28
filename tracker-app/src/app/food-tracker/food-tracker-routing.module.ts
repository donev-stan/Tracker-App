import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodDashboardComponent } from './food-dashboard/food-dashboard.component';
import { FoodCreateComponent } from './food-create/food-create.component';
import { FoodEditComponent } from './food-edit/food-edit.component';
import { IngredientComponent } from './food-create/ingredient/ingredient.component';

const routes: Routes = [
  { path: '', component: FoodDashboardComponent, pathMatch: 'full' },
  {
    path: 'create',
    component: FoodCreateComponent,
    children: [
      { path: 'ingredient', component: IngredientComponent },
      // { path: 'option2', component: Option2Component },
      // { path: 'option3', component: Option3Component },
      // { path: '', redirectTo: 'create', pathMatch: 'full' },
    ],
  },
  { path: 'edit/:id', component: FoodEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodTrackerRoutingModule {}
