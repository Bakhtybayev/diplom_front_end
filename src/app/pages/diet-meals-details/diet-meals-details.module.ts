import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DietMealsDetailsRoutingModule } from './diet-meals-details-routing.module';
import { DietMealsDetailsComponent } from './diet-meals-details.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DietMealsDetailsComponent
  ],
  imports: [
    CommonModule,
    DietMealsDetailsRoutingModule,
    SharedModule
  ]
})
export class DietMealsDetailsModule { }
