import { Unsubscribable } from 'src/app/utils/decorators/unsubscribable.decorator';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MainState } from './../../shared/interfaces/index.interface';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { isLogged } from 'src/app/shared/store/selectors/login.selectors';
import { LoginAction } from 'src/app/shared/store/actions/login.action';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { filter } from 'rxjs/operators';
import { TitleAction } from 'src/app/shared/store/actions/app.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
@Unsubscribable()
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  private isLogged$: Observable<boolean>;

  constructor(
    private store: Store<MainState>,
    private fb: FormBuilder,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.store.dispatch(new TitleAction('Login'));

    this.initVars();
    this.initListeners();
  }

  public confirm(): void {
    if (this.loginForm.valid) {
      this.store.dispatch(new LoginAction(this.loginForm.value));
    }
  }

  private initVars(): void {
    this.loginForm = this.fb.group({
      login: [null, Validators.required],
      password: [null, Validators.required]
    });

    this.isLogged$ = this.store
      .pipe(
        select(isLogged)
      );
  }

  private initListeners(): void {
    this.isLogged$
      .pipe(
        filter(Boolean)
      )
      .subscribe(() => this.router.navigate(['dashboard']));
  }
}
