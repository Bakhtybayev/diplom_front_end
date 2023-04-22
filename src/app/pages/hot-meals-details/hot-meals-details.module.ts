import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotMealsDetailsRoutingModule } from './hot-meals-details-routing.module';
import { HotMealsDetailsComponent } from './hot-meals-details.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HotMealsDetailsComponent
  ],
  imports: [
    CommonModule,
    HotMealsDetailsRoutingModule,
    SharedModule
  ]
})
export class HotMealsDetailsModule { }
