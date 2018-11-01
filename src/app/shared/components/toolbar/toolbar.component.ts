import { FormControl } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, HostBinding } from '@angular/core';
import { TodoListItem } from '../../interfaces/index.interface';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent implements OnInit {

  public addTaskValue: FormControl;
  public addTaskClassValue: string;

  @Output() public addTask = new EventEmitter<TodoListItem>();

  @HostBinding('class') public toolbarClass: string;

  constructor() { }

  public ngOnInit(): void {
    this.initVars();
  }

  public add(): void {
    this.addTask.emit({
      name: this.addTaskValue.value,
      isComplete: false
    });
  }

  private initVars(): void {
    this.addTaskValue = new FormControl();
    this.toolbarClass = 'animated fadeIn delay-1s';
  }
}
