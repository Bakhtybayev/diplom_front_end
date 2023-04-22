import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FilterlistPipe } from './pipe/filter-pipe';
import { CreateMenuComponent } from './components/create-menu/create-menu.component';
import { CreateMealComponent } from './components/create-meal/create-meal.component';
import { EditMealComponent } from './components/edit-meal/edit-meal.component';
import { EditMenuComponent } from './components/edit-menu/edit-menu.component';
import { ShowAdminComponent } from './components/show-admin/show-admin.component';
import { AdminRolesComponent } from './components/admin-roles/admin-roles.component';
import { NewRoleComponent } from './components/new-role/new-role.component';

@NgModule({
  declarations: [
    AdminComponent,
    FilterlistPipe,
    CreateMenuComponent,
    CreateMealComponent,
    EditMealComponent,
    EditMenuComponent,
    ShowAdminComponent,
    AdminRolesComponent,
    NewRoleComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
