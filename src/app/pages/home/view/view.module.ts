import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

import { ViewRoutingModule } from './view-routing.module';
import { ViewComponent } from './view.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
	declarations: [
		ViewComponent
	],
	imports: [
		CommonModule,
		ViewRoutingModule,
		SharedModule
	]
})
export class ViewModule { }
