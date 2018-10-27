import { Observable } from 'rxjs';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Store, select } from '@ngrx/store';
import { MainState } from './shared/interfaces/index.interface';
import { appTitle } from './shared/store/selectors/app.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  public title$: Observable<string>;

  constructor(private store: Store<MainState>) { }

  public ngOnInit(): void {
    this.initVars();
  }

  private initVars(): void {
    this.title$ = this.store
      .pipe(
        select(appTitle)
      );
  }
}
