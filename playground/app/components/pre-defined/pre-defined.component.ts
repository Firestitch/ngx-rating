import { Component } from '@angular/core';
import { FsRatingComponent } from '../../../../src/app/components/rating/rating.component';
import { FormsModule } from '@angular/forms';
import { FsRatingLabelDirective } from '../../../../src/app/directives/rating-label.directive';

@Component({
    selector: 'app-pre-defined',
    templateUrl: 'pre-defined.component.html',
    standalone: true,
    imports: [
        FsRatingComponent,
        FormsModule,
        FsRatingLabelDirective,
    ],
})
export class PreDefinedComponent {
}
