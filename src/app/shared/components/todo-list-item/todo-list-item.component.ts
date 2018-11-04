import { FormGroup, FormBuilder } from '@angular/forms';
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

  public group = this.fb.group({
    name: null,
    description: null
  });

  public isToggled: boolean;

  private _isComplete: boolean;
  private _id: string;

  public get isComplete(): GetNgClass {
    return { 'complete': this._isComplete };
  }

  public get name(): string {
    if (this.group) {
      return this.group.get('name').value;
    }
  }

  public get completeIcon(): string {
    return this._isComplete
      ? 'done_outline'
      : 'done';
  }

  @Input() public set data({ id, name, isComplete, description }: TodoListItem) {
    if (name) {
      this.group.patchValue({
        name,
        description
      });
      this._isComplete = isComplete;
      this._id = id;
    }
  }

  @Input() public set animateQueue(value: number) {
    this.animationStyle = `${value + 1}00ms`;
  }

  @Output() public deleted = new EventEmitter<TodoListItem>();
  @Output() public completed = new EventEmitter<TodoListItem>();
  @Output() public save = new EventEmitter<TodoListItem>();

  @HostBinding('class') public animation = 'animated fadeIn';
  @HostBinding('style.animation-delay') public animationStyle: string;

  constructor(private fb: FormBuilder) { }

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

  public saveDescription(): void {
    this.save.emit({
      id: this._id,
      description: this.group.get('description').value
    });
  }

  public toggleDescription(): void {
    this.isToggled = !this.isToggled;
  }
}
