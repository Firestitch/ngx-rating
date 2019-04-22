import { ChangeDetectionStrategy, Component, HostBinding, Input, TemplateRef } from '@angular/core';
import { FsRatingLabelDirective } from '../../../directives/rating-label.directive';

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

  @Input()
  @HostBinding('class.with-labels')
  public labelTemplate: TemplateRef<FsRatingLabelDirective>;

  @Input()
  set value(value) {
    this._value = value;

    if (typeof (value) === 'number') {
      this.type = this.index <= value
        ? StarTypes.Filled
        : StarTypes.Empty;
    }

    this._updateType();
  }

  @HostBinding('class.selected')
  public selected = false;

  public types = StarTypes;

  private _type: StarTypes = StarTypes.Empty;
  private _value: number;

  constructor() {}

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
    const isInt = Number.isInteger(this.value);

    if (isInt) {
      this.type = this.index <= this.value
        ? StarTypes.Filled
        : StarTypes.Empty;
    } else {
      /**
       * index = 4
       * value = 4.5
       * type = filled
       *
       * index = 5
       * value = 4.5
       * type = half
       */

      if (this.index <= this.value) {
        this.type = StarTypes.Filled
      } else if (Math.ceil(this.value) === this.index) {
        this.type = StarTypes.Half;
      }
    }
  }
}
