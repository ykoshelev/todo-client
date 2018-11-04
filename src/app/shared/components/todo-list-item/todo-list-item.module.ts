import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TodoListItemComponent } from './todo-list-item.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [TodoListItemComponent],
  declarations: [TodoListItemComponent]
})
export class TodoListItemModule { }
