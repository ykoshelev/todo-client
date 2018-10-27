import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TitleAction } from 'src/app/shared/store/actions/app.action';
import { Store } from '@ngrx/store';
import { MainState } from 'src/app/shared/interfaces/index.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
  constructor(private store: Store<MainState>) { }

  public ngOnInit(): void {
    this.store.dispatch(new TitleAction('Dashboard'));
  }
}
