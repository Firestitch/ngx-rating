import { Component } from '@angular/core';
import { FsRatingComponent } from '../../../../src/app/components/rating/rating.component';
import { FormsModule } from '@angular/forms';
import { FsRatingLabelDirective } from '../../../../src/app/directives/rating-label.directive';

@Component({
    selector: 'app-selectable',
    templateUrl: 'selectable.component.html',
    styleUrls: ['selectable.component.scss'],
    standalone: true,
    imports: [FsRatingComponent, FormsModule, FsRatingLabelDirective]
})
export class SelectableComponent {

  public rating = 3;
}
