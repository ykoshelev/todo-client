import { Unsubscribable } from 'src/app/utils/decorators/unsubscribable.decorator';
import { TodoListItem, GetNgClass } from './../../interfaces/index.interface';
import { Component, ChangeDetectionStrategy, EventEmitter, Output, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
@Unsubscribable()
export class TodoListItemComponent {

  public name: string;

  private _isComplete: boolean;
  private _id: string;

  public get isComplete(): GetNgClass {
    return { 'complete': this._isComplete };
  }

  public get completeIcon(): string {
    return this._isComplete
      ? 'done_outline'
      : 'done';
  }

  @Input() public set data({ id, name, isComplete }: TodoListItem) {
    if (name) {
      this.name = name;
      this._isComplete = isComplete;
      this._id = id;
    }
  }

  @Input() public set animateQueue(value: number) {
    this.animationStyle = `${value + 1}00ms`;
  }

  @Output() public deleted = new EventEmitter<TodoListItem>();
  @Output() public completed = new EventEmitter<TodoListItem>();

  @HostBinding('class') public animation = 'animated fadeInRight ';
  @HostBinding('style.animation-delay') public animationStyle: string;

  public complete(): void {
    this._isComplete = !this._isComplete;

    this.completed.emit({
      id: this._id,
      isComplete: this._isComplete
    });
  }

  public remove(): void {
    this.deleted.emit({
      id: this._id
    });
  }
}
