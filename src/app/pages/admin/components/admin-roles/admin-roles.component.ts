import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { NewRoleComponent } from '../new-role/new-role.component';

@Component({
  selector: 'app-admin-roles',
  templateUrl: './admin-roles.component.html',
  styleUrls: ['./admin-roles.component.scss']
})
export class AdminRolesComponent {
  searchText: any;
  admin_roles: any = [
    {
      title: 'Admin01@gmail.com',
      password: '11111'
    },
    {
      title: 'Admin02@gmail.com',
      password: '111112'
    }
  ];

  constructor(private toast: MessageService, private dialogService: DialogService) { }

  delete_role(email: any) {
    this.toast.add(
      {
        severity: 'success',
        summary: 'Сәтті',
        detail: `Роль ${email} басқарушылар тізімнен өшірілді!`
      }
    );
  }

  new_role() {
    this.dialogService.open(NewRoleComponent, {
      header: 'Жаңа роль құрыңыз!',
      width: '70%',
      dismissableMask: true
    })
  }
}
