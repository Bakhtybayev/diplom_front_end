import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DietMealsRoutingModule } from './diet-meals-routing.module';
import { DietMealsComponent } from './diet-meals.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DietMealsComponent
  ],
  imports: [
    CommonModule,
    DietMealsRoutingModule,
    SharedModule
  ]
})
export class DietMealsModule { }
