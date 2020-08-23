import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
    { path: '',   redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: '**', component: AppComponent }
  ];

  export const routing = RouterModule.forRoot(appRoutes);

  @NgModule({
      imports: [
          RouterModule.forRoot(appRoutes),
          RouterModule.forChild([])
      ],
      exports: [
          RouterModule
      ],
      declarations: []
  })

  export class AppRoutingModule {}
