import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-desserts-menu',
  templateUrl: './desserts-menu.component.html',
  styleUrls: ['./desserts-menu.component.scss']
})
export class DessertsMenuComponent {
  meals: any = [
    {
      id: '16', name: 'Творог с бананом', value: '9900',
    },
    {
      id: '17', name: 'Десерт Клубника со сливками', value: '9700',
    },
    {
      id: '18', name: 'Шоколадный мусс на десерт', value: '9500',
    },
    {
      id: '19', name: 'Крем десерт', value: '7350',
    },
    {
      id: '20', name: 'Яблоки в карамели на десерт', value: '8940',
    },
    {
      id: '21', name: 'Желе из агар агара с ягодами десерт', value: '6710',
    },
    {
      id: '22', name: 'Итальянская меренга на десерт', value: '8830',
    },
    {
      id: '23', name: 'Лимон с яйцом десерт', value: '3220',
    }
  ]

  constructor(private router: Router) { }

  openMealDetails(id: any) {
    this.router.navigateByUrl(`desserts-details/${id}`)
  }

  hotMeals() {
    return this.router.navigateByUrl('/desserts')
  }
}
