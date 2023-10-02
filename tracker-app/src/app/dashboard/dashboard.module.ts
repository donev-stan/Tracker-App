import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CaloriesComponent } from './calories/calories.component';
import { DirectivesModule } from 'src/shared/directives/directives.module';

@NgModule({
  declarations: [DashboardComponent, CaloriesComponent],
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    SharedModule,
    DirectivesModule,
  ],
})
export class DashboardModule {}
