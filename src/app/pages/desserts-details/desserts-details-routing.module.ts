import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DessertsDetailsComponent } from './desserts-details.component';

const routes: Routes = [{ path: '', component: DessertsDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DessertsDetailsRoutingModule { }
