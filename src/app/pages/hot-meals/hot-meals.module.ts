import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotMealsRoutingModule } from './hot-meals-routing.module';
import { HotMealsComponent } from './hot-meals.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HotMealsComponent
  ],
  imports: [
    CommonModule,
    HotMealsRoutingModule,
    SharedModule
  ]
})
export class HotMealsModule { }
