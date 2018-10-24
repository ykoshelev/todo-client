import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';
import { LoginService } from 'src/app/shared/services/login.service';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule
  ],
  exports: [LoginComponent],
  declarations: [LoginComponent],
  providers: [LoginService],
})
export class LoginModule { }
