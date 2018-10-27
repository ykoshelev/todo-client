import { AppAction } from './../../interfaces/index.interface';

export const TITLE = '[APP] title';

export class TitleAction implements AppAction {
  public type = TITLE;
  constructor(public payload: string) {}
}
