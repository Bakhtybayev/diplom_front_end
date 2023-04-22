import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { CreateMealComponent } from './components/create-meal/create-meal.component';
import { CreateMenuComponent } from './components/create-menu/create-menu.component';
import { EditMenuComponent } from './components/edit-menu/edit-menu.component';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { EditMealComponent } from './components/edit-meal/edit-meal.component';
import { ShowAdminComponent } from './components/show-admin/show-admin.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  active_id: any;
  meal_titles: any;
  all_meals: any;
  visible: boolean = false;
  meal_visible: boolean = false;
  title: any;
  meal_title: any;
  delete_title_id: any;
  delete_meal_id: any;

  mealses: any;

  searchText: any;

  constructor(
    private toast: MessageService,
    private dialogService: DialogService,
    private fb: FormBuilder,
    private confirmationService: ConfirmationService,
  ) { }

  ngOnInit() {
    let titles = JSON.parse(JSON.stringify(localStorage.getItem('titles')));
    let newTitles = JSON.parse(titles) ?? [];
    this.meal_titles = JSON.parse(JSON.stringify(newTitles));
    // all_meals
    let all = JSON.parse(JSON.stringify(localStorage.getItem('all_meals')));
    let newAll = JSON.parse(all) ?? [];
    this.all_meals = JSON.parse(JSON.stringify(newAll));
    //active_id
    let active = JSON.parse(JSON.stringify(localStorage.getItem('active_id')));
    let newActive = JSON.parse(active) ?? [];
    this.active_id = JSON.parse(JSON.stringify(newActive));
    // current_meals
    let current_meals = JSON.parse(JSON.stringify(localStorage.getItem('current_meals')));
    let newCurrent_meals = JSON.parse(current_meals) ?? [];
    this.mealses = JSON.parse(JSON.stringify(newCurrent_meals));
  }

  showAdmin() {
    this.dialogService.open(ShowAdminComponent, {
      header: 'Көрсетілген нұсқаның бірін таңдаңыз!',
      width: '70%',
      dismissableMask: true
    })
  }

  handle_meal_title(label: string) {
    this.meal_titles.forEach((item: any) => {
      if (item.title == label) {
        this.toast.add({ severity: 'error', summary: 'Қателік', detail: 'Бұл тағаның аты мәзірде бар!' });
        return
      } else {
        let new_meal_title = {
          id: Math.floor(Math.random() * 1000) + 1,
          label: label
        }
        this.meal_titles.push(new_meal_title);
        // this.meal_titles = [...this.meal_titles, new_meal_title];
        this.toast.add({ severity: 'success', summary: 'Сәтті', detail: 'Тағам мәзірге сәтті енгізілді' });
        localStorage.setItem('titles', JSON.stringify(this.meal_titles));
      }
    });
  }

  delete_title(label: any, id: any) {
    this.title = label;
    this.delete_title_id = id;
    this.visible = true;
  }

  imediately_delete() {
    let meals = JSON.parse(JSON.stringify(localStorage.getItem('titles')));
    let newMeals = JSON.parse(meals) ?? [];
    let newwItem = JSON.parse(JSON.stringify(newMeals));
    newwItem = newwItem.filter((item: any) => item.id !== this.delete_title_id);
    this.meal_titles = newwItem;
    localStorage.setItem('titles', JSON.stringify(this.meal_titles));
    newwItem = [];
    this.visible = false;
    this.toast.add({ severity: 'success', summary: 'Сәтті', detail: 'Мәзір сәтті өшірілді!' });
  }

  change_activation(meal: any) {
    this.active_id = {
      id: meal.id,
      label: meal.label
    };
    this.all_meals.forEach((item: any) => {
      if (item.label == meal.label) {
        this.mealses = item.meals;
      }
    })
    localStorage.setItem('current_meals', JSON.stringify(this.mealses ?? []));
    localStorage.setItem('active_id', JSON.stringify(this.active_id));
  }

  create_title() {
    this.dialogService.open(CreateMenuComponent, {
      header: 'Жаңа мәзір',
      width: '70%',
      dismissableMask: true
    })
  }

  create_meal() {
    this.dialogService.open(CreateMealComponent, {
      data: {
        label: this.active_id.label
      },
      header: 'Жаңа тағам',
      width: '70%',
      dismissableMask: true
    })
  }

  edit_title(title: any) {
    this.dialogService.open(EditMenuComponent, {
      data: {
        title: title
      },
      header: 'Мәзір атын өзгерту',
      width: '70%',
      dismissableMask: true
    })
  }

  edit_meal(meal: any) {
    this.dialogService.open(EditMealComponent, {
      data: {
        meal: meal,
        label: this.active_id.label
      },
      header: 'Тағамды өзгерту',
      width: '70%',
      dismissableMask: true
    })
  }
  // OBRABOTKA
  delete_meal(meal_title: any, id: any) {
    this.meal_title = meal_title;
    this.delete_meal_id = id;
    this.meal_visible = true;
  }
  // OBRABOTKA
  immedetily_delete_meal() {
    let meals = JSON.parse(JSON.stringify(localStorage.getItem('all_meals')));
    let newMeals = JSON.parse(meals) ?? [];
    let newwItem = JSON.parse(JSON.stringify(newMeals));
    newwItem.forEach((item: any) => {
      if (item.label == this.active_id.label) {
        item.meals = item.meals.filter((subitem: any) => subitem.id !== this.delete_meal_id);
        this.mealses = item.meals;
      }
    })
    localStorage.setItem('all_meals', JSON.stringify(newwItem));
    newwItem = [];
    this.meal_visible = false;
    this.toast.add({ severity: 'success', summary: 'Сәтті', detail: 'Тағам сәтті өшірілді!' });
  }
}
