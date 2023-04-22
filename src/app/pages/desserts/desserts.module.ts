import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DessertsRoutingModule } from './desserts-routing.module';
import { DessertsComponent } from './desserts.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DessertsComponent
  ],
  imports: [
    CommonModule,
    DessertsRoutingModule,
    SharedModule
  ]
})
export class DessertsModule { }
