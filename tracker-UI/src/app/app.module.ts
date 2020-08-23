import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { RouterModule } from "@angular/router";
=======
>>>>>>> 9f526b0b60a68b249aba237eee3fe25ed93582ec
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { routing } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './servicesapi/LoginService';
import { HttpClient, HttpHandler } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    CommonModule,
    routing
  ],
  providers: [
    HttpHandler,
    HttpClient,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
