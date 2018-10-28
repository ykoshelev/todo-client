import { DashboardService } from './../../shared/services/dashboard.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { TodoListItemModule } from 'src/app/shared/components/todo-list-item/todo-list-item.module';

const routes: Routes = [
  {
    path: 'dashboard',
    children: [
      { path: '', component: DashboardComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    TodoListItemModule,
    RouterModule.forChild(routes)
  ],
  exports: [DashboardComponent],
  declarations: [DashboardComponent],
  providers: [DashboardService]
})
export class DashboardModule { }
