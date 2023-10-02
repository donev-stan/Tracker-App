import { NgModule } from '@angular/core';

// Forms
import { KeyFilterModule } from 'primeng/keyfilter';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { SliderModule } from 'primeng/slider';
import { DropdownModule } from 'primeng/dropdown';
import { KnobModule } from 'primeng/knob';

// Panel
import { FieldsetModule } from 'primeng/fieldset';
import { CardModule } from 'primeng/card';

// Chart
import { ChartModule } from 'primeng/chart';

// Directives
import { AnimateModule } from 'primeng/animate';
import { RippleModule } from 'primeng/ripple';

// Media
import { ImageModule } from 'primeng/image';

@NgModule({
  imports: [
    CardModule,
    KeyFilterModule,
    SliderModule,
    InputTextModule,
    InputNumberModule,
    DropdownModule,
    FieldsetModule,
    ChartModule,
    KnobModule,
    AnimateModule,
    RippleModule,
    ImageModule,
  ],
  exports: [
    CardModule,
    KeyFilterModule,
    SliderModule,
    InputTextModule,
    InputNumberModule,
    DropdownModule,
    FieldsetModule,
    ChartModule,
    KnobModule,
    AnimateModule,
    RippleModule,
    ImageModule,
  ],
})
export class PrimeNgModule {}
