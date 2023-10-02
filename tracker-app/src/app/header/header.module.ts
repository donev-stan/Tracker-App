import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { SharedModule } from 'primeng/api';
import { DirectivesModule } from 'src/shared/directives/directives.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, SharedModule, DirectivesModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
