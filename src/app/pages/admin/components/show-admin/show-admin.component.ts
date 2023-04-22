import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AdminRolesComponent } from '../admin-roles/admin-roles.component';

@Component({
  selector: 'app-show-admin',
  templateUrl: './show-admin.component.html',
  styleUrls: ['./show-admin.component.scss']
})
export class ShowAdminComponent {

  constructor(
    private router: Router,
    private dialogService: DialogService,
    private dialogRef: DynamicDialogRef) { }

  showRoles() {
    this.dialogService.open(AdminRolesComponent, {
      header: 'Админ қызметкерлері',
      width: '70%',
      dismissableMask: true
    })
  }

  logout() {
    this.router.navigateByUrl('/home');
    this.dialogRef.close()
  }

}
