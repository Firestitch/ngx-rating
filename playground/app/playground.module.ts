import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FsExampleModule } from '@firestitch/example';
import { FsMessageModule } from '@firestitch/message';

import { ToastrModule } from 'ngx-toastr';

import { FsRatingModule } from '@firestitch/rating';

import { AppMaterialModule } from './material.module';
import {
  SelectableComponent,
  ExamplesComponent, PreDefinedComponent
} from './components';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: ExamplesComponent },
];

@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,
    FsRatingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    FsExampleModule.forRoot(),
    FsMessageModule.forRoot(),
    ToastrModule.forRoot({ preventDuplicates: true }),
    RouterModule.forRoot(routes),
  ],
  entryComponents: [
  ],
  declarations: [
    AppComponent,
    ExamplesComponent,
    SelectableComponent,
    PreDefinedComponent,
  ],
  providers: [
  ],
})
export class PlaygroundModule {
}
