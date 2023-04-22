import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { HomeAction } from './home.actions';

export class HomeStateModel {
  public items: string[];
}

const defaults = {
  items: []
};

@State<HomeStateModel>({
  name: 'home',
  defaults
})
@Injectable()
export class HomeState {
  @Action(HomeAction)
  add({ getState, setState }: StateContext<HomeStateModel>, { payload }: HomeAction) {
    const state = getState();
    setState({ items: [ ...state.items, payload ] });
  }
}
