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

  public isToggled: boolean;

  private _isComplete: boolean;
  private _id: string;
  private _description: string;

  public get isComplete(): GetNgClass {
    return { 'complete': this._isComplete };
  }

  public get description(): string {
    return this._description;
  }

  public get completeIcon(): string {
    return this._isComplete
      ? 'done_outline'
      : 'done';
  }

  @Input() public set data({ id, name, isComplete, description }: TodoListItem) {
    if (name) {
      this.name = name;
      this._isComplete = isComplete;
      this._id = id;
      this._description = description;
    }
  }

  @Input() public set animateQueue(value: number) {
    this.animationStyle = `${value + 1}00ms`;
  }

  @Output() public deleted = new EventEmitter<TodoListItem>();
  @Output() public completed = new EventEmitter<TodoListItem>();

  @HostBinding('class') public animation = 'animated fadeIn';
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

  public toggleDescription(): void {
    this.isToggled = !this.isToggled;
  }
}
