import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DessertsDetailsRoutingModule } from './desserts-details-routing.module';
import { DessertsDetailsComponent } from './desserts-details.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DessertsDetailsComponent
  ],
  imports: [
    CommonModule,
    DessertsDetailsRoutingModule,
    SharedModule
  ]
})
export class DessertsDetailsModule { }
