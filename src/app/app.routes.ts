import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

export const routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '', component: AppComponent },
  { path: 'login', component: LoginComponent },
] as Routes;
