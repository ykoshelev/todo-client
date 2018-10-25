import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { MainState } from 'src/app/shared/store/main.interface';
import { isLogged } from 'src/app/shared/store/selectors/login.selector';
import { LoginAction } from 'src/app/shared/store/actions/login.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  constructor(private store: Store<any>) { }

  public ngOnInit(): void {
    this.store.dispatch(new LoginAction('lkjgfchjn'));
    this.store
      .pipe(
        select(isLogged)
      )
      .subscribe(d => console.log(d));
  }
}
