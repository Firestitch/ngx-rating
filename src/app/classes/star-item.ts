import { TemplateRef } from '@angular/core';

export class StarItem {
  public titleTemplate: TemplateRef<any>;

  constructor(public index) {}
}
