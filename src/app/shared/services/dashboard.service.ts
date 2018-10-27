import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoListItem } from '../interfaces/index.interface';

@Injectable()
export class DashboardService {
  constructor(private httpClient: HttpClient) { }

  public getTodosList(id: string): Observable<TodoListItem[]> {
    return this.httpClient.get<TodoListItem[]>(`/todos?id=${id}`);
  }
}
