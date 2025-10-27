import { Component } from '@angular/core';
import { environment } from '@env';
import { FsExampleModule } from '@firestitch/example';
import { PreDefinedComponent } from '../pre-defined/pre-defined.component';
import { SelectableComponent } from '../selectable/selectable.component';


@Component({
    templateUrl: 'examples.component.html',
    standalone: true,
    imports: [FsExampleModule, PreDefinedComponent, SelectableComponent]
})
export class ExamplesComponent {
  public config = environment;
}
