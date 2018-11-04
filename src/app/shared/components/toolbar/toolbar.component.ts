import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, HostBinding } from '@angular/core';
import { TodoListItem } from '../../interfaces/index.interface';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent implements OnInit {

  public group: FormGroup;
  public addTaskClassValue: string;
  public isToggled: boolean;

  @Output() public addTask = new EventEmitter<TodoListItem>();

  @HostBinding('class') public toolbarClass: string;

  constructor(private fb: FormBuilder) { }

  public ngOnInit(): void {
    this.initVars();
  }

  public add(): void {
    this.addTask.emit({
      ...this.group.value,
      isComplete: false
    });
  }

  public addDescription(): void {
    this.isToggled = !this.isToggled;
  }

  private initVars(): void {
    this.group = this.fb.group({
      name: null,
      description: null
    });
    this.toolbarClass = 'animated fadeIn delay-1s';
    this.isToggled = false;
  }
}
