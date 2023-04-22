import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotMealsComponent } from './hot-meals.component';

const routes: Routes = [{ path: '', component: HotMealsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotMealsRoutingModule { }
