import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =
  [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
      path: 'home',
      loadChildren: () =>
        import('./pages/home/home.module').then(
          m => m.HomeModule)
    },
    {
      path: 'main',
      loadChildren: () =>
        import('./pages/main/main.module').then((m) => m.MainModule)
    },
    {
      path: 'hot-meals/:title',
      loadChildren: () =>
        import('./pages/hot-meals/hot-meals.module').then((m) => m.HotMealsModule)
    },
    {
      path: 'diet-meals',
      loadChildren: () =>
        import('./pages/diet-meals/diet-meals.module').then((m) => m.DietMealsModule)
    },
    {
      path: 'desserts',
      loadChildren: () =>
        import('./pages/desserts/desserts.module').then((m) => m.DessertsModule)
    },
    {
      path: 'hot-meals-details/:title/:id',
      loadChildren: () =>
        import('./pages/hot-meals-details/hot-meals-details.module').then((m) => m.HotMealsDetailsModule)
    },
    {
      path: 'diet-meals-details/:id',
      loadChildren: () =>
        import('./pages/diet-meals-details/diet-meals-details.module').then((m) => m.DietMealsDetailsModule)
    },
    {
      path: 'desserts-details/:id',
      loadChildren: () =>
        import('./pages/desserts-details/desserts-details.module').then((m) => m.DessertsDetailsModule)
    },
    {
      path: 'basket',
      loadChildren: () =>
        import('./pages/basket/basket.module').then((m) => m.BasketModule)
    },
    {
      path: 'admin',
      loadChildren: () =>
        import('./pages/admin/admin.module').then((m) => m.AdminModule)
    },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
