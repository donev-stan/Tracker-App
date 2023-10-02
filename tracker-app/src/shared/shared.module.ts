import { NgModule } from '@angular/core';

import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { ComponentsModule } from './components/components.module';
import { DirectivesModule } from './directives/directives.module';

@NgModule({
  imports: [PrimeNgModule, ComponentsModule, DirectivesModule],
  exports: [PrimeNgModule, ComponentsModule, DirectivesModule],
})
export class SharedModule {}
