import {NgModule} from "@angular/core";
import {MatChipsModule} from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";

@NgModule({
  declarations: [],
  imports: [
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  exports: [
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule
  ]
})
export class AngularMaterialModule {

}
