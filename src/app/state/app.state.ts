import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { AppAction } from './app.actions';

export class AppStateModel {
  public items: any = [];
}

const defaults = {
  items: []
};

@State<AppStateModel>({
  name: 'app',
  defaults
})
@Injectable()
export class AppState {
  // @Selector
  @Action(AppAction)
  GetAppAction({ patchState }: StateContext<AppStateModel>, { items }: AppAction) {
    return patchState({
      items: items
    })
  }
}
