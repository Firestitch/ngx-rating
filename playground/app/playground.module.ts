import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { FsExampleModule } from '@firestitch/example';
import { FsMessageModule } from '@firestitch/message';

import { FsRatingModule } from '@firestitch/rating';

import { AppComponent } from './app.component';
import {
  ExamplesComponent, PreDefinedComponent,
  SelectableComponent
} from './components';
import { AppMaterialModule } from './material.module';

const routes: Routes = [
  { path: '', component: ExamplesComponent },
];

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    FsRatingModule.forRoot(),
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    FsExampleModule.forRoot(),
    FsMessageModule.forRoot(),
    RouterModule.forRoot(routes, {}),
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
