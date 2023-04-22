import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-create-menu',
  templateUrl: './create-menu.component.html',
  styleUrls: ['./create-menu.component.scss']
})
export class CreateMenuComponent {
  form?: FormGroup;
  meal_titles: any;
  all_meals: any;
  constructor(private fb: FormBuilder, private toast: MessageService, private dialogRef: DynamicDialogRef) { }

  ngOnInit() {
    this.form = this.fb.group({
      label: new FormControl('', Validators.required),
    });
    let titles = JSON.parse(JSON.stringify(localStorage.getItem('titles')));
    let newTitles = JSON.parse(titles) ?? [];
    this.meal_titles = JSON.parse(JSON.stringify(newTitles));
    // all_meals
    let all = JSON.parse(JSON.stringify(localStorage.getItem('all_meals')));
    let newAll = JSON.parse(all) ?? [];
    this.all_meals = JSON.parse(JSON.stringify(newAll));
  }

  submit() {
    const { label } = this.form?.value;
    let new_title;
    let new_meal;
    this.meal_titles.forEach((item: any) => {
      if (item.title == label) {
        this.toast.add({ severity: 'error', summary: 'Қателік', detail: 'Бұл тағамның аты мәзірде бар!' });
        return
      } else {
        new_title = {
          id: Math.floor(Math.random() * 1000) + 1,
          label: label
        }
        new_meal = {
          label: label,
          meals: []
        }
      }
    });
    this.meal_titles.push(new_title);
    this.all_meals.push(new_meal);
    // this.meal_titles = [...this.meal_titles, new_meal_title];
    this.toast.add({ severity: 'success', summary: 'Сәтті', detail: 'Тағам мәзірге сәтті енгізілді' });
    localStorage.setItem('titles', JSON.stringify(this.meal_titles));
    localStorage.setItem('all_meals', JSON.stringify(this.all_meals));
    this.dialogRef.close();
  }
}
