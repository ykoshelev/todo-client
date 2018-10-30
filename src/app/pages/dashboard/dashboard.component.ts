import { TodoListItem } from './../../shared/interfaces/index.interface';
import { Observable } from 'rxjs';
import { DashboardService } from './../../shared/services/dashboard.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TitleAction } from 'src/app/shared/store/actions/app.action';
import { Store } from '@ngrx/store';
import { MainState } from 'src/app/shared/interfaces/index.interface';
import { Unsubscribable } from 'src/app/utils/decorators/unsubscribable.decorator';
import { FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
@Unsubscribable()
export class DashboardComponent implements OnInit {

  public todoList$: Observable<TodoListItem[]>;

  constructor(
    private store: Store<MainState>,
    private service: DashboardService
  ) { }

  public ngOnInit(): void {
    this.store.dispatch(new TitleAction('Dashboard'));

    this.initVars();
    this.initListeners();
  }

  public addTask(data: TodoListItem): void {

    this.service.addTask(data)
      .subscribe(console.log);
  }

  private initListeners(): void {
    this.todoList$
      .subscribe(data => {
        console.log('data: ', data);
      });
  }

  private initVars(): void {
    this.todoList$ = this.service.getTodosList();
  }
}
