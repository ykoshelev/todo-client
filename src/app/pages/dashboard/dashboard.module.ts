import { DashboardService } from './../../shared/services/dashboard.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

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
    RouterModule.forChild(routes)
  ],
  exports: [DashboardComponent],
  declarations: [DashboardComponent],
  providers: [DashboardService]
})
export class DashboardModule { }
