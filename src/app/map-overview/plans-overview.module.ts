import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {PlansOverviewComponent} from './plans-overview.component';
import {AngularMaterialModule} from "../angular-material/angular-material.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    PlansOverviewComponent
  ],
  exports: [
    PlansOverviewComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    NgOptimizedImage,
  ]
})
export class PlansOverviewModule {
}
