import { Component } from '@angular/core';
import { DashboardService } from 'src/shared/services/dashboard.service';

@Component({
  selector: 'tracker-calories',
  templateUrl: './calories.component.html',
  styleUrls: ['./calories.component.scss'],
})
export class CaloriesComponent {
  knobValueColor: string = 'SlateGray';
  knobRangeColor: string = 'MediumTurquoise';

  private _currentCaloriesKnobValue: number = 0;

  get currentCaloriesKnobValue(): number {
    return this._currentCaloriesKnobValue;

    return this._currentCaloriesKnobValue > this.goalCalories
      ? this.goalCalories
      : this._currentCaloriesKnobValue;
  }

  set currentCaloriesKnobValue(value: number) {
    const overTheGoal: boolean = value >= this.goalCalories;
    const underTheGoal: boolean = value < this.goalCalories && value >= 0;
    const belowZero: boolean = value < 0;

    if (overTheGoal) {
      this._currentCaloriesKnobValue = this.goalCalories;
      this.differenceCalories = value - this.goalCalories;
      // Calorie Surplus = value - this.goalCalories
      // Set additional value
    } else if (underTheGoal) {
      this._currentCaloriesKnobValue = value;
    } else if (belowZero) {
      this._currentCaloriesKnobValue = Math.abs(value);
      this.differenceCalories = value;
      // Calorie Deficit = value
      // Set additional value
    }
  }

  currentCalories: number = 1700;
  goalCalories: number = 1500;
  differenceCalories: number = 0;

  shouldSubtractBurnedCalories: boolean = false;
  burnedCalories: number = 300;

  constructor(private dashboard: DashboardService) {}

  ngOnInit(): void {
    // Should be done when currentCalories value is set:
    this.currentCaloriesKnobValue = this.currentCalories;
  }

  onBurnedCaloriesClick(): void {
    this.shouldSubtractBurnedCalories = !this.shouldSubtractBurnedCalories;

    if (this.shouldSubtractBurnedCalories) {
      this.currentCalories -= this.burnedCalories;
    } else {
      this.currentCalories += this.burnedCalories;
    }

    this.currentCaloriesKnobValue = this.currentCalories;
  }
}
