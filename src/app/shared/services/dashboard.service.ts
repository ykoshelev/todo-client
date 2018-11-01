import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoListItem } from '../interfaces/index.interface';
import { mapToItem } from 'src/app/utils/functions/mappers.functions';

@Injectable()
export class DashboardService {
  constructor(private httpClient: HttpClient) { }

  public getTodosList(): Observable<TodoListItem[]> {
    return this.httpClient.get(`/todos`)
      .pipe(
        map(mapToItem)
      );
  }

  public addTask(data: TodoListItem): Observable<any> {
    return this.httpClient.post(`/add-task`, data);
  }
}
