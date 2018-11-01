import { TodoListItem } from './../../shared/interfaces/index.interface';
import { Observable, of } from 'rxjs';
import { DashboardService } from './../../shared/services/dashboard.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TitleAction } from 'src/app/shared/store/actions/app.action';
import { Store } from '@ngrx/store';
import { MainState } from 'src/app/shared/interfaces/index.interface';
import { Unsubscribable } from 'src/app/utils/decorators/unsubscribable.decorator';
import { tap, switchMap } from 'rxjs/operators';

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
  }

  public addTask(data: TodoListItem): void {

    this.todoList$ =  this.service.addTask(data)
      .pipe(
        switchMap((list: TodoListItem[]) => of(list))
      );
  }

  public removeTask({ id }: TodoListItem): void {
    this.todoList$ =  this.service.removeTask(id)
      .pipe(
        switchMap((list: TodoListItem[]) => of(list))
      );
  }

  public completedTask({ id, isComplete }: TodoListItem): void {
    this.service.completeTask(id, isComplete)
      .subscribe();
  }


  private initVars(): void {
    this.todoList$ = this.service.getTodosList();
  }
}
