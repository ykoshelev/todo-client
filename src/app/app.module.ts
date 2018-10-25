import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './pages/login/login.module';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { HeaderModule } from './shared/components/header/header.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './shared/store/main.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    LoginModule,
    HeaderModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(reducers)
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
