import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FitnessTrackerRoutingModule } from './fitness-tracker-routing.module';
import { FitnessDashboardComponent } from './fitness-dashboard/fitness-dashboard.component';
import { SharedModule } from 'primeng/api';

@NgModule({
  declarations: [FitnessDashboardComponent],
  imports: [CommonModule, FitnessTrackerRoutingModule, SharedModule],
})
export class FitnessTrackerModule {}
