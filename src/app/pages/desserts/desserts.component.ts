import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.component.html',
  styleUrls: ['./desserts.component.scss'],
  providers: [MessageService]
})
export class DessertsComponent {
  dessert_meals: any = [];
  basket_length: any;

  constructor(private location: Location, private router: Router, private toast: MessageService) { }

  ngOnInit() {
    this.dessert_meals = [
      {
        id: 16,
        image: 'https://static.1000.menu/img/content-v2/65/97/40300/tvorog-s-bananom_1572608832_prev_hor.jpg',
        title: 'Сметана қосылған банан',
        amount: '9900',
        ingredients: 'Сметана, Бананы, зира (тұқым), Мёд, қыша (тұқым), Ванилин, Сметана, Грецкие орехи, Печенье песочное.',
        about: 'Нәзік, сау, өте дәмді. Бүкіл отбасы үшін. Банан қосылған сүзбе-бұл тіпті сүзбені ұнатпайтындарға ұнайтын десерт. Майы аз тағамдарды қолдана отырып, сіз диеталық ем ала аласыз. Десерттің дәмін әртүрлі қоспалар - жаңғақтар, печенье, жидектер арқылы әртараптандыруға болады.',
        time: '45',
        count: 1,
        disabled: false
      },
      {
        id: 17,
        image: 'https://static.1000.menu/img/content-v2/04/9b/4024/klubnika-so-slivkami-desert_1612873445_prev_hor.jpg',
        title: 'Клубника қаймақпен',
        amount: '9700',
        ingredients: 'Сметана, Клубника, зира (тұқым), Мёд, қыша (тұқым), Ванилин, Сметана, Грецкие орехи, Печенье песочное.',
        about: 'Теңдесі жоқ дәмді және қарапайым! Тіпті баланы пісіріңіз. Мен кілегей мен жаңа, хош иісті құлпынайдан гөрі тағамдардың комбинациясын білмеймін. Десерт өте тез дайындалады және өте дәмді болып шығады. Кілегей қосылған құлпынай мерекелік үстелге де жарайды. Бұл комбинацияны балалар да, ересектер де жақсы көреді.',
        time: '30',
        count: 1,
        disabled: false
      },
      {
        id: 18,
        image: 'https://static.1000.menu/img/content-v2/88/e8/43878/shokoladnyi-muss-na-desert_1614767011_prev_hor.jpg',
        title: 'Шоколадты десерт',
        amount: '9500',
        ingredients: 'Шоколадты, Бананы, зира (тұқым), Мёд, қыша (тұқым), Ванилин, Сметана, Грецкие орехи, Печенье песочное.',
        about: 'Дәмді және қарапайым! Тіпті баланы пісіріңіз. Мен кілегей мен жаңа, хош иісті құлпынайдан гөрі тағамдардың комбинациясын білмеймін. Десерт өте тез дайындалады және өте дәмді болып шығады. Кілегей қосылған құлпынай мерекелік үстелге де жарайды. Бұл комбинацияны балалар да, ересектер де жақсы көреді.',
        time: '25',
        count: 1,
        disabled: false
      },
      {
        id: 19,
        image: 'https://static.1000.menu/img/content-v2/14/54/41685/krem-desert_1576683878_prev_hor.jpg',
        title: 'Крем десерт',
        amount: '7350',
        ingredients: 'Сметана, Крем, зира (тұқым), Мёд, қыша (тұқым), Ванилин, Сметана, Грецкие орехи, Печенье песочное.',
        about: 'Дәмді және қарапайым! Тіпті баланы пісіріңіз. Мен кілегей мен жаңа, хош иісті құлпынайдан гөрі тағамдардың комбинациясын білмеймін. Десерт өте тез дайындалады және өте дәмді болып шығады. Кілегей қосылған құлпынай мерекелік үстелге де жарайды. Бұл комбинацияны балалар да, ересектер де жақсы көреді.',
        time: '20',
        count: 1,
        disabled: false
      },
      {
        id: 20,
        image: 'https://static.1000.menu/img/content-v2/a9/97/40253/yabloki-v-karameli-v-domashnix-usloviyax_1615965583_prev_hor.jpg',
        title: 'Қаймақтағы алма',
        amount: '8940',
        ingredients: 'Қаймақ, алма, зира (тұқым), Мёд, қыша (тұқым), Ванилин, Сметана, Грецкие орехи, Печенье песочное.',
        about: 'Дәмді және қарапайым! Тіпті баланы пісіріңіз. Мен кілегей мен жаңа, хош иісті құлпынайдан гөрі тағамдардың комбинациясын білмеймін. Десерт өте тез дайындалады және өте дәмді болып шығады. Кілегей қосылған құлпынай мерекелік үстелге де жарайды. Бұл комбинацияны балалар да, ересектер де жақсы көреді.!',
        time: '32',
        count: 1,
        disabled: false
      },
      {
        id: 21,
        image: 'https://static.1000.menu/img/content-v2/fd/1e/26104/jele-iz-agar-agara_1626637129_prev_hor.jpg',
        title: 'Агар дағы желе десерті',
        amount: '6710',
        ingredients: 'Желе, Бананы, зира (тұқым), Мёд, қыша (тұқым), Ванилин, Сметана, Грецкие орехи, Печенье песочное.',
        about: 'Дәмді және қарапайым! Тіпті баланы пісіріңіз. Мен кілегей мен жаңа, хош иісті құлпынайдан гөрі тағамдардың комбинациясын білмеймін. Десерт өте тез дайындалады және өте дәмді болып шығады. Кілегей қосылған құлпынай мерекелік үстелге де жарайды. Бұл комбинацияны балалар да, ересектер де жақсы көреді.',
        time: '18',
        count: 1,
        disabled: false
      },
      {
        id: 22,
        image: 'https://static.1000.menu/img/content-v2/17/14/11691/italyanskaya-merenga_1618550601_prev_hor.jpg',
        title: 'Италиялық маренга',
        amount: '8830',
        ingredients: 'Маренга, зира (тұқым), Мёд, қыша (тұқым), Ванилин, Сметана, Грецкие орехи, Печенье песочное.',
        about: 'Дәмді және қарапайым! Тіпті баланы пісіріңіз. Мен кілегей мен жаңа, хош иісті құлпынайдан гөрі тағамдардың комбинациясын білмеймін. Десерт өте тез дайындалады және өте дәмді болып шығады. Кілегей қосылған құлпынай мерекелік үстелге де жарайды. Бұл комбинацияны балалар да, ересектер де жақсы көреді.',
        time: '27',
        count: 1,
        disabled: false
      },
      {
        id: 23,
        image: 'https://static.1000.menu/img/content-v2/cb/b0/72370/limon-s-yaicom-desert_1676976209_prev_hor.jpg',
        title: 'Лимон қосылған жұмыртқа',
        amount: '3220',
        ingredients: 'Сметана, Лимон, зира (тұқым), Мёд, қыша (тұқым), Ванилин, Сметана, Грецкие орехи, Печенье песочное.',
        about: 'Дәмді және қарапайым! Тіпті баланы пісіріңіз. Мен кілегей мен жаңа, хош иісті құлпынайдан гөрі тағамдардың комбинациясын білмеймін. Десерт өте тез дайындалады және өте дәмді болып шығады. Кілегей қосылған құлпынай мерекелік үстелге де жарайды. Бұл комбинацияны балалар да, ересектер де жақсы көреді.',
        time: '50',
        count: 1,
        disabled: false
      }
    ]
    let meals = JSON.parse(JSON.stringify(localStorage.getItem('meals')));
    let newMeals = JSON.parse(meals) ?? [];
    let newwItem = JSON.parse(JSON.stringify(newMeals));
    this.basket_length = newwItem.length;
    this.dessert_meals.forEach((elem: any) => {
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
    this.router.navigateByUrl(`desserts-details/${id}`)
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
