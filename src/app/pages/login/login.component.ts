import { MainState } from './../../shared/interfaces/index.interface';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { isLogged } from 'src/app/shared/store/selectors/login.selectors';
import { LoginAction } from 'src/app/shared/store/actions/login.action';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(
    private store: Store<MainState>,
    private fb: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.initForm();
  }

  public confirm(): void {
    if (this.loginForm.valid) {
      this.store.dispatch(new LoginAction(this.loginForm.value));
    }
  }

  private initForm(): void {
    this.loginForm = this.fb.group({
      login: [null, Validators.required],
      password: [null, Validators.required]
    });
  }
}
