import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-diet-meals',
  templateUrl: './diet-meals.component.html',
  styleUrls: ['./diet-meals.component.scss'],
  providers: [MessageService]
})
export class DietMealsComponent {
  diet_meals: any = [];
  basket_length: any;

  constructor(private location: Location, private router: Router, private toast: MessageService) { }
  ngOnInit() {
    this.diet_meals = [
      {
        id: 11,
        image: 'https://i.ytimg.com/vi/S_QBwbvlUQs/maxresdefault.jpg',
        title: 'Салат Малибу',
        amount: '5500',
        ingredients: 'Ысталған тауық (барабан таяқшасы) - 150 г жаңа қияр - 150 г үлкен қызанақ-1 дана. қатты ірімшік-50 г крекер-40 г Майонез-2 ас қасық. қасық тұз (міндетті емес) - дәміне қарай',
        about: 'Осындай экзотикалық атауға қарамастан, "Малибу" салатында шетелде қандай да бір көркем өнімдер жоқ. Ысталған тауық еті, жаңа піскен көкөністер, ірімшік және крекер-бұл салаттың негізгі ингредиенттері. Бұл рецепт бойынша Салат өте дәмді және бәріне ұнайды.',
        time: '17',
        count: 1,
        disabled: false
      },
      {
        id: 12,
        image: 'https://podacha-blud.com/uploads/posts/2022-12/1670425883_1-podacha-blud-com-p-salat-vinegret-foto-1.jpg',
        title: 'Салат Винегрет',
        amount: '8900',
        ingredients: 'қызылша, сәбіз, картоп, бұршақ жасыл балмұздақ, пияз, лимон шырыны, тұз, Өсімдік майы.',
        about: 'Винегрет-бұл қайнатылған көкөністерден жасалған салат, ол өз атауын ХХ ғасырдың басына дейін кең таралған осы тағамға арналған салат таңғышына қарыздар.',
        time: '12',
        count: 1,
        disabled: false
      },
      {
        id: 13,
        image: 'https://i.pinimg.com/originals/65/9c/a1/659ca1fe6659947e2b5d2cbc70ec6bb5.jpg',
        title: 'Холодец',
        amount: '3200',
        ingredients: 'Ысталған тауық (барабан таяқшасы) - 50 г жаңа қияр - 70 г үлкен қызанақ-1 дана. қатты ірімшік-50 г крекер-40 г Майонез-2 ас қасық. қасық тұз (міндетті емес) - дәміне қарай',
        about: 'Осындай экзотикалық атауға қарамастан, "Малибу" салатында шетелде қандай да бір көркем өнімдер жоқ. Ысталған тауық еті, жаңа піскен көкөністер, ірімшік және крекер-бұл салаттың негізгі ингредиенттері. Бұл рецепт бойынша Салат өте дәмді және бәріне ұнайды.',
        time: '19',
        count: 1,
        disabled: false
      },
      {
        id: 14,
        image: 'https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666312084_24-mykaleidoscope-ru-p-salat-tsezar-s-tuntsom-vkontakte-31.jpg',
        title: 'Салат Цезарь',
        amount: '6200',
        ingredients: 'Ысталған тауық (барабан таяқшасы) - 150 г жаңа қияр - 150 г үлкен қызанақ-1 дана. қатты ірімшік-50 г крекер-40 г Майонез-2 ас қасық. қасық тұз (міндетті емес) - дәміне қарай',
        about: 'Осындай экзотикалық атауға қарамастан, "Малибу" салатында шетелде қандай да бір көркем өнімдер жоқ. Ысталған тауық еті, жаңа піскен көкөністер, ірімшік және крекер-бұл салаттың негізгі ингредиенттері. Бұл рецепт бойынша Салат өте дәмді және бәріне ұнайды.',
        time: '11',
        count: 1,
        disabled: false
      },
      {
        id: 15,
        image: 'https://podacha-blud.com/uploads/posts/2022-12/1670448276_5-podacha-blud-com-p-salat-s-semgoi-foto-5.jpg',
        title: 'Салат семги',
        amount: '4800',
        ingredients: 'Ысталған тауық (барабан таяқшасы) - 150 г жаңа қияр - 150 г үлкен қызанақ-1 дана. қатты ірімшік-50 г крекер-40 г Майонез-2 ас қасық. қасық тұз (міндетті емес) - дәміне қарай',
        about: 'Осындай экзотикалық атауға қарамастан, "Малибу" салатында шетелде қандай да бір көркем өнімдер жоқ. Ысталған тауық еті, жаңа піскен көкөністер, ірімшік және крекер-бұл салаттың негізгі ингредиенттері. Бұл рецепт бойынша Салат өте дәмді және бәріне ұнайды.',
        time: '22',
        count: 1,
        disabled: false
      }
    ]
    let meals = JSON.parse(JSON.stringify(localStorage.getItem('meals')));
    let newMeals = JSON.parse(meals) ?? [];
    let newwItem = JSON.parse(JSON.stringify(newMeals));
    this.basket_length = newwItem.length;
    this.diet_meals.forEach((elem: any) => {
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
    this.router.navigateByUrl(`diet-meals-details/${id}`)
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
        if (item.id === meal.id) {
          this.toast.add({ severity: 'error', summary: 'Қателік', detail: 'Бұл тағам себетте бар!' });
          meal.disabled = true;
          return
        }
      })
    } else {
      newwItem.push(meal);
      localStorage.setItem('meals', JSON.stringify(newwItem));
      this.toast.add({ severity: 'success', summary: 'Сәтті', detail: 'Тағам себетке салынды' });
    }

    if (!meal.disabled) {
      newwItem.push(meal);
      localStorage.setItem('meals', JSON.stringify(newwItem));
      this.toast.add({ severity: 'success', summary: 'Сәтті', detail: 'Тағам себетке салынды' });
    }
    this.basket_length = newwItem.length;
    newwItem = [];
    newMeals = [];
  }
}
