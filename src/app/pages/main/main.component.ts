import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { HotMealsMenuComponent } from 'src/app/components/hot-meals-menu/hot-meals-menu.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [DialogService, MessageService]
})
export class MainComponent {
  hot_ref: any;
  meal_titles: any;
  all_meals: any;
  basket_length: any;

  constructor(private router: Router, private dialogService: DialogService) { }

  ngOnInit() {
    let titles = JSON.parse(JSON.stringify(localStorage.getItem('titles')));
    let newTitles = JSON.parse(titles) ?? [];
    this.meal_titles = JSON.parse(JSON.stringify(newTitles));
    // all_meals
    let all = JSON.parse(JSON.stringify(localStorage.getItem('all_meals')));
    let newAll = JSON.parse(all) ?? [];
    this.all_meals = JSON.parse(JSON.stringify(newAll));
    // basket_length
    let meals = JSON.parse(JSON.stringify(localStorage.getItem('meals')));
    let newMeals = JSON.parse(meals) ?? [];
    let newwItem = JSON.parse(JSON.stringify(newMeals));
    this.basket_length = newwItem.length;
  }

  basket() {
    this.router.navigateByUrl('/basket');
  }

  async openMealsMenu(label: any) {
    let meals;
    await this.all_meals.forEach((item: any) => {
      if (item.label == label) {
        meals = item.meals;
      }
    })
    this.hot_ref = this.dialogService.open(HotMealsMenuComponent, {
      data: {
        meals: meals,
        label: label
      },
      header: 'Ыстық тағамдар мәзірі',
      width: '90%',
      dismissableMask: true
    })
  }

  ngOnDestroy() {
    if (this.hot_ref) {
      this.hot_ref.close();
    }
  }
}
