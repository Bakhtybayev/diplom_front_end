import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-hot-meals-menu',
  templateUrl: './hot-meals-menu.component.html',
  styleUrls: ['./hot-meals-menu.component.scss']
})
export class HotMealsMenuComponent {
  meals: any;
  label: any;

  constructor(private router: Router, private dialogConfig: DynamicDialogConfig) { }

  ngOnInit() {
    this.meals = this.dialogConfig.data.meals;
    this.label = this.dialogConfig.data.label;
  }

  openMealDetails(id: any) {
    this.router.navigateByUrl(`hot-meals-details/${id}`)
  }

  hotMeals() {
    const confirmTitle = this.label.replace(" ", "-");
    return this.router.navigateByUrl(`/hot-meals/${confirmTitle}`)
  }
}
