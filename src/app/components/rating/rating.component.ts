import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, forwardRef, HostBinding, Input, OnInit, QueryList, TemplateRef, inject } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { FsRatingLabelDirective } from '../../directives/rating-label.directive';
import { FS_RATING_DEFAULT_CONFIG } from './../../injectors/rating-config';
import { FsRatingConfig } from './../../interfaces/rating-config';
import { FsRatingStarComponent } from './star/star.component';


@Component({
    selector: 'fs-rating',
    templateUrl: 'rating.component.html',
    styleUrls: ['rating.component.scss'],
    providers: [{
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => FsRatingComponent),
            multi: true
        }],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [FsRatingStarComponent],
})
export class FsRatingComponent implements OnInit, ControlValueAccessor {
  private _cd = inject(ChangeDetectorRef);


  @Input()
  set maxRange(value) {
    this._maxRange = value;
    this.initStars();
  };

  @Input()
  public showValue = false;

  @Input('unselectedColor') set setUnselectedColor(value) {
    this.unselectedColor = value;
  }

  @Input('selectedColor') set setselectedColor(value) {
    this.selectedColor = value;
  }

  @Input()
  @HostBinding('class.selectable')
  public selectable = false;


  @ContentChildren(FsRatingLabelDirective, { read: TemplateRef })
  set labels(values: QueryList<TemplateRef<FsRatingLabelDirective>>) {
    this.labelTemplates = values.toArray();
    this._cd.detectChanges();
  }

  public onChange: any = () => {};
  public onTouch: any = () => {};

  public visibleValue = 0;
  public stars: number[] = [];
  public labelTemplates: TemplateRef<FsRatingLabelDirective>[] = [];
  public unselectedColor;
  public selectedColor;

  private _value: number;
  private _maxRange = 5;

  constructor() {
    const config = inject<FsRatingConfig>(FS_RATING_DEFAULT_CONFIG);

    this.selectedColor = config.selectedColor;
    this.unselectedColor = config.unselectedColor;
  }

  set value(value) {
    if (value !== this._value) {
      this._value = value;
      this.visibleValue = this._value;

      this.initStars();
      this._cd.detectChanges();
      this.onChange(value);
      this.onTouch(value);
    }
  }

  get value() {
    return this._value;
  }

  public ngOnInit(): void {
    this.initStars();
  }

  public writeValue(value) {
    const val = +value;

    if (value !== null && typeof (val) === 'number' && val !== this.value) {
      this._value = val;

      this.visibleValue = this._value;

      this._cd.detectChanges();
    }
  }

  /**
   * Init number of not filled stars
   */
  public initStars() {
    this.stars = [];

    for (let i = 1; i <= this._maxRange; i++) {
      this.stars.push(i);
    }

    this._cd.detectChanges();
  }

  /**
   * Select star and save rating
   * @param index
   */
  public selectStar(index) {
    if (this.selectable) {
      if (this.value && this.value === index) {
        this.value = 0;
      } else {
        this.value = index;
      }
    }
  }

  public registerOnChange(fn) { this.onChange = fn;  }
  public registerOnTouched(fn) { this.onTouch = fn; }
}
