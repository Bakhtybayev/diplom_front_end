export class HomeAction {
  static readonly type = '[Home] Add item';
  constructor(public payload: string) { }
}
