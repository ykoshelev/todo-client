import { Unsubscribable } from 'src/app/utils/decorators/unsubscribable.decorator';
import { TodoListItem, GetNgClass } from './../../interfaces/index.interface';
import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
@Unsubscribable()
export class TodoListItemComponent implements OnInit {

  public name: string;

  private _isComplete: boolean;

  public get isComplete(): GetNgClass {
    return { 'complete': !this._isComplete };
  }
  @Input() public set data({ name, isComplete }: TodoListItem) {
    if (name) {
      this.name = name;
      this._isComplete = isComplete;
    }
  }

  @Output() public deleted: EventEmitter<void>;
  @Output() public completed: EventEmitter<void>;

  constructor() { }

  public ngOnInit(): void {
    this.initVars();
  }

  public complete(): void {
    this.completed.emit();
  }

  public remove(): void {
    this.deleted.emit();
  }

  private initVars(): void {
    this.deleted = new EventEmitter<void>();
    this.completed = new EventEmitter<void>();
  }
}
