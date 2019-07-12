import { ChangeDetectionStrategy, Component, HostBinding, Input, TemplateRef, Inject } from '@angular/core';
import { FsRatingLabelDirective } from '../../../directives/rating-label.directive';
import { FS_RATING_DEFAULT_CONFIG } from '../../../injectors/rating-config';
import { FsRatingConfig } from '../../../interfaces/rating-config';

enum StarTypes {
  Filled = 'filled',
  Half = 'half',
  Empty = 'empty'
}

@Component({
  selector: 'fs-rating-star',
  templateUrl: 'star.component.html',
  styleUrls: [ 'star.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FsRatingStarComponent {

  @Input()
  public index: number;

  @Input('unselectedColor') set setUnselectedColor(value) {
    this.unselectedColor = value;
  }

  @Input('selectedColor') set setselectedColor(value) {
    this.selectedColor = value;
  }

  @Input()
  @HostBinding('class.with-labels')
  public labelTemplate: TemplateRef<FsRatingLabelDirective>;

  @Input()
  set value(value) {
    this._value = value;
    this._updateType();
  }

  @HostBinding('class.selected')
  public selected = false;

  public types = StarTypes;
  public halfWidth = 100;
  public unselectedColor;
  public selectedColor;
  private _type: StarTypes = StarTypes.Empty;
  private _value: number;

  constructor(@Inject(FS_RATING_DEFAULT_CONFIG) config: FsRatingConfig
  ) {
    this.selectedColor = config.selectedColor;
    this.unselectedColor = config.unselectedColor;
  }

  set type(value) {
    this._type = value;

    this.selected = this._type === StarTypes.Filled || this._type === StarTypes.Half;
  }

  get type() {
    return this._type;
  }

  get value() {
    return this._value;
  }

  private _updateType() {

    this.type = StarTypes.Empty;
    const value = this.value - (this.index - 1);

    if (value > 0) {
      this.type = value >= 1 ? StarTypes.Filled : StarTypes.Half;

      if (this.type === StarTypes.Half) {
        this.halfWidth = 50;
      }
    }
  }
}
