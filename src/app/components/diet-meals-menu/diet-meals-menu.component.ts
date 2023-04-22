import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diet-meals-menu',
  templateUrl: './diet-meals-menu.component.html',
  styleUrls: ['./diet-meals-menu.component.scss']
})
export class DietMealsMenuComponent {
  meals: any = [
    {
      id: '11', name: 'Салат Малибу', value: '5500',
    },
    {
      id: '12', name: 'Салат Винегрет', value: '8900',
    },
    {
      id: '13', name: 'Холодец', value: '3200',
    },
    {
      id: '14', name: 'Салат Цезарь', value: '6200',
    },
    {
      id: '15', name: 'Салат семги', value: '4800',
    }
  ]

  constructor(private router: Router) { }

  openMealDetails(id: any) {
    this.router.navigateByUrl(`diet-meals-details/${id}`)
  }

  hotMeals() {
    return this.router.navigateByUrl('/diet-meals')
  }
}
