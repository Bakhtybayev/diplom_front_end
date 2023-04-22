import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HotMealsMenuComponent } from './components/hot-meals-menu/hot-meals-menu.component';
import { DietMealsMenuComponent } from './components/diet-meals-menu/diet-meals-menu.component';
import { DessertsMenuComponent } from './components/desserts-menu/desserts-menu.component';
import { SharedModule } from './shared/shared.module';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HotMealsMenuComponent,
    DietMealsMenuComponent,
    DessertsMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([]),
    NgxsLoggerPluginModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [MessageService, DialogService, ConfirmationService, DynamicDialogRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
