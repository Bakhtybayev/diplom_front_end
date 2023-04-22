import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DietMealsComponent } from './diet-meals.component';

const routes: Routes = [{ path: '', component: DietMealsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DietMealsRoutingModule { }
