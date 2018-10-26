import { MainState } from './../../interfaces/index.interface';
import { isLogged } from './../../store/selectors/login.selectors';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Unsubscribable } from 'src/app/utils/decorators/unsubscribable.decorator';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
@Unsubscribable()
export class HeaderComponent implements OnInit {

  public readonly appName = 'TODO';
  public readonly framework = 'Angular';

  public isLogged: boolean;

  constructor(
    private router: Router,
    private store: Store<MainState>
  ) { }

  public ngOnInit(): void {
    this.initListeners();
  }

  public login(): void {
    this.router.navigate(['login']);
  }

  public logout(): void {
    console.log('logout');
  }

  private initListeners(): void {
    this.store
      .pipe(
        select(isLogged)
      )
      .subscribe(value => this.isLogged = value);
  }
}
