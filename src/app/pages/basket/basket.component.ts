import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
  providers: [MessageService]
})
export class BasketComponent {
  basket_meals: any;
  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    let meals = JSON.parse(JSON.stringify(localStorage.getItem('meals')));
    let newMeals = JSON.parse(meals) ?? [];
    let newwItem = JSON.parse(JSON.stringify(newMeals));
    this.basket_meals = newwItem;
  }

  back() {
    this.location.back();
  }

  counter(operation: string, id: any) {
    let meals = JSON.parse(JSON.stringify(localStorage.getItem('meals')));
    let newMeals = JSON.parse(meals) ?? [];
    let newwItem = JSON.parse(JSON.stringify(newMeals));
    newwItem.forEach((item: any) => {
      if (item.id == id) {
        if (operation === 'plus') {
          item.count += 1;
        } else if (item.count == 0) {
          return
        } else {
          item.count -= 1;
        }
      }
    })
    this.basket_meals = newwItem;
    localStorage.setItem('meals', JSON.stringify(newwItem));
    newwItem = [];
  }

  reset_basket() {
    localStorage.setItem('meals', JSON.stringify([]));
    this.basket_meals = [];
  }

  delete_meal(id: any) {
    let meals = JSON.parse(JSON.stringify(localStorage.getItem('meals')));
    let newMeals = JSON.parse(meals) ?? [];
    let newwItem = JSON.parse(JSON.stringify(newMeals));
    newwItem = newwItem.filter((item: any) => item.id !== id);
    this.basket_meals = newwItem;
    localStorage.setItem('meals', JSON.stringify(this.basket_meals));
    newwItem = [];
  }
}
