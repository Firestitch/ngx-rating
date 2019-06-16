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
  public unselectedColor = '#E7E7E7';

  @Input()
  public selectedColor = '#F8C100';

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
