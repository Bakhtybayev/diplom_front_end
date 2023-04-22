import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-edit-meal',
  templateUrl: './edit-meal.component.html',
  styleUrls: ['./edit-meal.component.scss']
})
export class EditMealComponent {
  edit_meal: any;
  label: any;
  form?: FormGroup;

  constructor(private dialogRef: DynamicDialogRef, private toast: MessageService, private dialogConfig: DynamicDialogConfig, private fb: FormBuilder) {
    this.edit_meal = dialogConfig.data.meal;
    this.label = dialogConfig.data.label;
  }

  ngOnInit() {
    this.form = this.fb.group({
      image: new FormControl(this.edit_meal.image),
      title: new FormControl(this.edit_meal.title),
      amount: new FormControl(this.edit_meal.amount),
      ingredients: new FormControl(this.edit_meal.ingredients),
      about: new FormControl(this.edit_meal.about),
      time: new FormControl(this.edit_meal.time),
    });
  }

  submit() {
    let meals = JSON.parse(JSON.stringify(localStorage.getItem('all_meals')));
    let newMeals = JSON.parse(meals) ?? [];
    let newwItem = JSON.parse(JSON.stringify(newMeals));
    newwItem.forEach((item: any) => {
      if (item.label == this.label) {
        item.meals.forEach((subitem: any) => {
          if (subitem.id == this.edit_meal.id) {
            const { image, title, amount, ingredients, about, time } = this.form?.value;
            const body = {
              id: subitem.id,
              disabled: subitem.disabled,
              title: title,
              image: image,
              amount: amount,
              ingredients: ingredients,
              about: about,
              time: time,
              count: subitem.count
            }
            // item.meals.replace(subitem, body);
            // subitem = { ...body };
            let index = item.meals.indexOf(subitem)
            item.meals[index] = body;
            localStorage.setItem('all_meals', JSON.stringify(newwItem));
            this.toast.add({ severity: 'success', summary: 'Сәтті', detail: 'Тағам сәтті өзгертілді!' });
            this.dialogRef.close();
          }
        })
      }
    })
  }
}
