import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-hot-meals-details',
  templateUrl: './hot-meals-details.component.html',
  styleUrls: ['./hot-meals-details.component.scss'],
  providers: [MessageService]
})
export class HotMealsDetailsComponent {

  hot_meals: any;
  hot_meal: any;
  basket_length: any;
  params: any;
  constructor(private route: ActivatedRoute, private location: Location, private router: Router, private toast: MessageService) {
    this.params = route.snapshot.params['title'];
  }

  basket() {
    this.router.navigateByUrl('/basket');
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
    const id = this.route.snapshot.params["id"];
    this.hot_meals.forEach((meal: any) => {
      if (meal.id == id) {
        this.hot_meal = meal;
      }
    });
    let meals = JSON.parse(JSON.stringify(localStorage.getItem('meals')));
    let newMeals = JSON.parse(meals) ?? [];
    let newwItem = JSON.parse(JSON.stringify(newMeals));
    this.basket_length = newwItem.length;
    newwItem.forEach((item: any) => {
      if (this.hot_meal.id === item.id) {
        this.hot_meal.disabled = true;
      }
    })
  }

  back() {
    this.location.back();
  }

  addToLocalStorage(meal: any) {
    let meals = localStorage.getItem('meals');
    let newMeals;
    if (meals) newMeals = JSON.parse(meals);
    let newwItem = JSON.parse(JSON.stringify(newMeals));
    if (newwItem.length) {
      newwItem.forEach((item: any) => {
        if (item.id != meal.id) {
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
  }
}
