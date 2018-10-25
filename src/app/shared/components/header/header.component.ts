import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  public appName = 'TODO';
  public framework = 'Angular';

  constructor(private router: Router) { }

  public ngOnInit(): void { }

  public login() {
    this.router.navigate(['login']);
  }
}
