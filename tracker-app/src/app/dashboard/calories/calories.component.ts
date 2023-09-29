import { Component } from '@angular/core';
import { DashboardService } from 'src/shared/services/dashboard.service';

@Component({
  selector: 'tracker-calories',
  templateUrl: './calories.component.html',
  styleUrls: ['./calories.component.scss'],
})
export class CaloriesComponent {
  currentCaloriesKnobValue: number = 1400;

  private _currentCalories: number = 1600;

  get currentCalories(): number {
    return this._currentCalories;
  }

  set currentCalories(value: number) {
    const caloriesOverGoal: boolean = value > this.goalCalories;

    console.log(value, caloriesOverGoal);

    if (caloriesOverGoal) {
      this.differenceCalories = value - this.goalCalories;
      this.currentCaloriesKnobValue = this.goalCalories;
    } else {
      this.differenceCalories = this.goalCalories - value;
      this.currentCaloriesKnobValue = value;
    }

    this._currentCalories = value;
  }

  goalCalories: number = 1500;

  shouldSubtractBurnedCalories: boolean = false;
  burnedCalories: number = 2000;

  differenceCalories: number = 0;

  constructor(private dashboard: DashboardService) {}

  ngOnInit(): void {}

  onBurnedCaloriesClick(): void {
    this.shouldSubtractBurnedCalories = !this.shouldSubtractBurnedCalories;

    console.log(this.shouldSubtractBurnedCalories);

    if (this.shouldSubtractBurnedCalories) {
      this.currentCalories -= this.burnedCalories;
    } else {
      this.currentCalories += this.burnedCalories;
    }
  }
}
