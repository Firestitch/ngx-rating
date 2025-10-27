import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FsRatingComponent } from './components/rating/rating.component';
import { FsRatingStarComponent } from './components/rating/star/star.component';
import { FsRatingLabelDirective } from './directives/rating-label.directive';
import { FS_RATING_CONFIG, FS_RATING_DEFAULT_CONFIG } from './injectors/rating-config';
import { FsRatingConfig } from './interfaces/rating-config';


@NgModule({
    imports: [
        CommonModule,
        FsRatingComponent,
        FsRatingStarComponent,
        FsRatingLabelDirective,
    ],
    exports: [
        FsRatingComponent,
        FsRatingLabelDirective,
    ],
    providers: []
})
export class FsRatingModule {
  static forRoot(config: FsRatingConfig = {}): ModuleWithProviders<FsRatingModule> {
    return {
      ngModule: FsRatingModule,
      providers: [
        {
          provide: FS_RATING_CONFIG,
          useValue: config
        },
        {
          provide: FS_RATING_DEFAULT_CONFIG,
          useFactory: FsRatingConfigFactory,
          deps: [FS_RATING_CONFIG],
        }
      ]
    };
  }
}

export function FsRatingConfigFactory(config: FsRatingConfig) {
  return Object.assign(
    {},
    {
      unselectedColor: '#E7E7E7',
      selectedColor: '#F8C100'
    },
    config || {}
  );
}
