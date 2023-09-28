import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FoodTrackerRoutingModule } from './food-tracker-routing.module';
import { FoodDashboardComponent } from './food-dashboard/food-dashboard.component';
import { FoodCreateComponent } from './food-create/food-create.component';
import { FoodEditComponent } from './food-edit/food-edit.component';
import { IngredientComponent } from './food-create/ingredient/ingredient.component';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [
    FoodDashboardComponent,
    FoodCreateComponent,
    FoodEditComponent,
    IngredientComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FoodTrackerRoutingModule,
    SharedModule,
  ],
})
export class FoodTrackerModule {}
