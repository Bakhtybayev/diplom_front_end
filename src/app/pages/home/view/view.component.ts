import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  select: boolean = false;
  form?: FormGroup;
  admin: any;
  role: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toast: MessageService
  ) { }

  ngOnInit() {
    // roles
    let roles = JSON.parse(JSON.stringify(localStorage.getItem('roles')));
    let newRoles = JSON.parse(roles) ?? [];
    this.role = JSON.parse(JSON.stringify(newRoles));
    // admin
    let entries = JSON.parse(JSON.stringify(localStorage.getItem('admin')));
    let newAdmin = JSON.parse(entries) ?? [];
    this.admin = JSON.parse(JSON.stringify(newAdmin));
    this.form = this.fb.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', [Validators.required, Validators.minLength(3)]),
    });
  }

  async submit() {
    const { email, password } = this.form?.value;
    if (this.admin.title == email && this.admin.password == password) {
      this.router.navigateByUrl('/admin');
      this.toast.add(
        {
          severity: 'success',
          summary: 'Сәтті',
          detail: 'Сіз жүйеге сәтті тіркелдіңіз!'
        }
      );
    } else {
      this.role.forEach((item: any) => {
        if (this.admin.title == item.title && this.admin.password == item.password) {
          this.router.navigateByUrl('/admin');
          this.toast.add(
            {
              severity: 'success',
              summary: 'Сәтті',
              detail: 'Сіз жүйеге сәтті тіркелдіңіз!'
            }
          );
        } else {
          this.toast.add(
            {
              severity: 'error',
              summary: 'Қате',
              detail: 'Емайл және құпия сөзді қатесіз толтырыңыз!'
            }
          );
        }
      })
    }
    // conditions with local storage admin
  }
}
