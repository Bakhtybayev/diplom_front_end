import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-create-meal',
  templateUrl: './create-meal.component.html',
  styleUrls: ['./create-meal.component.scss']
})
export class CreateMealComponent {
  form?: FormGroup;
  create_meal: any;

  constructor(private dialogRef: DynamicDialogRef, private toast: MessageService, private dialogConfig: DynamicDialogConfig, private fb: FormBuilder) {
    this.create_meal = dialogConfig.data.label;
  }

  ngOnInit() {
    this.form = this.fb.group({
      image: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      amount: new FormControl('', [Validators.required]),
      ingredients: new FormControl('', [Validators.required]),
      about: new FormControl('', [Validators.required]),
      time: new FormControl('', [Validators.required]),
    });
  }

  submit() {
    let meals = JSON.parse(JSON.stringify(localStorage.getItem('all_meals')));
    let newMeals = JSON.parse(meals) ?? [];
    let newwItem = JSON.parse(JSON.stringify(newMeals));
    const body = {
      id: Math.floor(Math.random() * 1000) + 1,
      count: 0,
      disabled: false,
      ...this.form?.value
    };
    newwItem.forEach((item: any) => {
      if (item.label == this.create_meal) {
        item.meals.push(body);
      }
    })
    localStorage.setItem('all_meals', JSON.stringify(newwItem));
    this.toast.add({ severity: 'success', summary: 'Сәтті', detail: 'Жаңа тағам сәтті қосылды!' });
    this.dialogRef.close();
  }
}
