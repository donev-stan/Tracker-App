import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'tracker-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss'],
})
export class IngredientComponent {
  createIngredientForm: FormGroup;

  constructor() {
    this.createIngredientForm = new FormGroup({
      name: new FormControl(null, Validators.required),

      fats: new FormControl(0, [
        Validators.required,
        Validators.min(0),
        Validators.max(100),
      ]),
      carbs: new FormControl(0, Validators.required),
      sugars: new FormControl(0, Validators.required),
      fibre: new FormControl(0, Validators.required),
      protein: new FormControl(0, Validators.required),
      calories: new FormControl(0, Validators.required),
    });
  }

  ngOnInit(): void {
    this.createIngredientForm.valueChanges.subscribe((value) => {
      // console.log(value);
    });
  }

  onSliderChange(event: any, nutrition: string) {
    this.createIngredientForm.controls[nutrition].patchValue(
      String(event.value)
    );
  }
}
