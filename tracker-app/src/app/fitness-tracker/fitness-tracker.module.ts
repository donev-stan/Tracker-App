import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FitnessTrackerRoutingModule } from './fitness-tracker-routing.module';
import { FitnessDashboardComponent } from './fitness-dashboard/fitness-dashboard.component';

@NgModule({
  declarations: [
    FitnessDashboardComponent
  ],
  imports: [CommonModule, FitnessTrackerRoutingModule],
})
export class FitnessTrackerModule {}
