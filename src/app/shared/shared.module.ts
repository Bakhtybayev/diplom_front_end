import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { TabViewModule } from 'primeng/tabview';
import { DialogModule } from 'primeng/dialog';
import { MessagesModule } from 'primeng/messages';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { BadgeModule } from 'primeng/badge';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { PasswordModule } from 'primeng/password';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    AccordionModule,
    TabViewModule,
    DialogModule,
    MessagesModule,
    DynamicDialogModule,
    BadgeModule,
    ToastModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    ConfirmPopupModule,
    ConfirmDialogModule,
    PasswordModule
  ],
  exports: [
    ButtonModule,
    AccordionModule,
    TabViewModule,
    DialogModule,
    MessagesModule,
    DynamicDialogModule,
    BadgeModule,
    ToastModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    ConfirmPopupModule,
    ConfirmDialogModule,
    PasswordModule
  ]
})
export class SharedModule { }
