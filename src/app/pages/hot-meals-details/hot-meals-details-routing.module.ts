import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotMealsDetailsComponent } from './hot-meals-details.component';

const routes: Routes = [{ path: '', component: HotMealsDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotMealsDetailsRoutingModule { }
