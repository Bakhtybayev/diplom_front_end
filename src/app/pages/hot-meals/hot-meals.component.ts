import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-hot-meals',
  templateUrl: './hot-meals.component.html',
  styleUrls: ['./hot-meals.component.scss'],
  providers: [MessageService]
})
export class HotMealsComponent implements OnInit {
  hot_meals: any = [];
  basket_length: any;
  params: any;

  constructor(private location: Location, private router: Router, private toast: MessageService, private route: ActivatedRoute) {
    this.params = route.snapshot.params['title'];
    this.params = this.params.replace("-", " ")
  }

  ngOnInit() {
    let all_meals = JSON.parse(JSON.stringify(localStorage.getItem('all_meals')));
    let new_all_meals = JSON.parse(all_meals) ?? [];
    let newAll = JSON.parse(JSON.stringify(new_all_meals));
    newAll.forEach((item: any) => {
      if (item.label == this.params) {
        this.hot_meals = item.meals;
      }
    })
    let meals = JSON.parse(JSON.stringify(localStorage.getItem('meals')));
    let newMeals = JSON.parse(meals) ?? [];
    let newwItem = JSON.parse(JSON.stringify(newMeals));
    this.basket_length = newwItem.length;
    this.hot_meals.forEach((elem: any) => {
      newwItem.forEach((item: any) => {
        if (elem.id === item.id) {
          elem.disabled = true;
        }
      })
    })
  }

  back() {
    this.location.back();
  }

  hot_meals_details(id: any) {
    this.router.navigateByUrl(`hot-meals-details/${this.params}/${id}`)
  }

  basket() {
    this.router.navigateByUrl('/basket');
  }

  addToLocalStorage(meal: any) {
    let meals = localStorage.getItem('meals');
    let newMeals;
    if (meals) newMeals = JSON.parse(meals);
    let newwItem = JSON.parse(JSON.stringify(newMeals));
    if (newwItem.length) {
      newwItem.forEach((item: any) => {
        if (item.id != meal.id && !meal.disabled) {
          newwItem.push(meal);
          localStorage.setItem('meals', JSON.stringify(newwItem));
          this.toast.add({ severity: 'success', summary: 'Сәтті', detail: 'Тағам себетке салынды' });
          meal.disabled = true;
          return
        }
      })
    } else {
      newwItem.push(meal);
      localStorage.setItem('meals', JSON.stringify(newwItem));
      this.toast.add({ severity: 'success', summary: 'Сәтті', detail: 'Тағам себетке салынды' });
    }
    this.basket_length = newwItem.length;
    newwItem = [];
    newMeals = [];
  }
}
