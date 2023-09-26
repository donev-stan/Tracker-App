import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodTrackerRoutingModule } from './food-tracker-routing.module';
import { FoodDashboardComponent } from './food-dashboard/food-dashboard.component';
import { FoodCreateComponent } from './food-create/food-create.component';
import { FoodEditComponent } from './food-edit/food-edit.component';

@NgModule({
  declarations: [FoodDashboardComponent, FoodCreateComponent, FoodEditComponent],
  imports: [CommonModule, FoodTrackerRoutingModule],
})
export class FoodTrackerModule {}
