import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DietMealsDetailsComponent } from './diet-meals-details.component';

const routes: Routes = [{ path: '', component: DietMealsDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DietMealsDetailsRoutingModule { }
