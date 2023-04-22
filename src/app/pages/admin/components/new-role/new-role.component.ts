import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-new-role',
  templateUrl: './new-role.component.html',
  styleUrls: ['./new-role.component.scss']
})
export class NewRoleComponent {
  form?: FormGroup;
  constructor(private fb: FormBuilder, private toast: MessageService) { }

  ngOnInit() {
    this.form = this.fb.group({
      title: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', [Validators.required, Validators.minLength(3)]),
    });
    let titles = JSON.parse(JSON.stringify(localStorage.getItem('titles')));
    let newTitles = JSON.parse(titles) ?? [];
  }

  submit() {
    this.toast.add(
      {
        severity: 'success',
        summary: 'Сәтті',
        detail: 'Жаңа роль сәтті құрылды!'
      }
    );
  }
}
