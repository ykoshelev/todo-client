import { LoginAction, LoginActionSuccess, LoginActionFailed } from 'src/app/shared/store/actions/login.action';
import { Observable, of } from 'rxjs';
import { LoginService } from './../../services/login.service';
import { LOGIN } from './../actions/login.action';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError } from 'rxjs/operators';
import { AppAction } from '../../interfaces/index.interface';

@Injectable()
export class LoginEffects {
  constructor(
    private service: LoginService,
    private actions$: Actions
  ) { }

  @Effect()
  public login$ = this.actions$
    .pipe(
      ofType(LOGIN),
      exhaustMap(({ payload: { login, password } }: LoginAction) =>
        this.service.signIn(login, password)
          .pipe(
            map(() => new LoginActionSuccess()),
            catchError(() => of(new LoginActionFailed()))
          )
      )
    ) as Observable<AppAction>;
}
