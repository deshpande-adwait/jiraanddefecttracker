import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';

import { LoginService } from '../servicesapi/LoginService';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule  


  ],
  declarations: [
    LoginComponent
  ],

  providers: [
      LoginService
  ],

  exports:[
    LoginComponent
  ]

})
export class LoginModule {
}