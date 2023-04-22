import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.scss']
})
export class EditMenuComponent {
  edit_title: any;
  form?: FormGroup;

  constructor(private toast: MessageService, private dialogConfig: DynamicDialogConfig, private fb: FormBuilder, private dialogRef: DynamicDialogRef) {
    this.edit_title = dialogConfig.data.title;
  }

  ngOnInit() {
    this.form = this.fb.group({
      label: new FormControl(this.edit_title.label)
    });
  }

  submit() {
    let meals = JSON.parse(JSON.stringify(localStorage.getItem('titles')));
    let newMeals = JSON.parse(meals) ?? [];
    let newwItem = JSON.parse(JSON.stringify(newMeals));
    const { label } = this.form?.value;
    newwItem.map((item: any) => {
      if (item.id == this.edit_title.id && item.label != label) {
        item.label = label;
      }
    })
    const newMealTitles = [...newwItem];
    localStorage.setItem('titles', JSON.stringify(newMealTitles));
    this.dialogRef.close();
    this.toast.add({ severity: 'success', summary: 'Сәтті', detail: 'Мәзір сәтті өзгертілді!' });
  }
}
