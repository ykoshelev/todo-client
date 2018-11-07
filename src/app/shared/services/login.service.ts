import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {
  constructor(private httpClient: HttpClient) { }

  public signIn(login: string, password: string): Observable<any> {
    return this.httpClient.post('/login', { login, password });
  }

  public signOut(): Observable<any> {
    return this.httpClient.post('/logout', { });
  }
}
