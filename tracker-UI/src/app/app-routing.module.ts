import { Routes } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '',   redirectTo: '/login', pathMatch: 'full' },
    { path: '**', component: AppComponent }
  ];