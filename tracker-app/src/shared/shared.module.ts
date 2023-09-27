import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedComponentsModule } from './components/shared-components.module';

@NgModule({
  imports: [CommonModule, PrimeNgModule, SharedComponentsModule],
  exports: [PrimeNgModule, SharedComponentsModule],
})
export class SharedModule {}
