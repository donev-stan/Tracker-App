import { NgModule } from '@angular/core';

import { ImageErrorHandlerDirective } from './image-error-handler.directive';
import { SvgIconDirective } from './svg-icon.directive';

@NgModule({
  declarations: [ImageErrorHandlerDirective, SvgIconDirective],
  exports: [ImageErrorHandlerDirective, SvgIconDirective],
})
export class DirectivesModule {}
