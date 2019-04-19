import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FsRatingComponent } from './components/rating/rating.component';
import { FsRatingStarComponent } from './components/rating/star/star.component';
import { FsRatingLabelDirective } from './directives/rating-label.directive';


@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    FsRatingComponent,
    FsRatingLabelDirective,
  ],
  entryComponents: [
  ],
  declarations: [
    FsRatingComponent,
    FsRatingStarComponent,

    FsRatingLabelDirective,
  ],
  providers: [
  ],
})
export class FsRatingModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FsRatingModule,
      // providers: [FsComponentService]
    };
  }
}
