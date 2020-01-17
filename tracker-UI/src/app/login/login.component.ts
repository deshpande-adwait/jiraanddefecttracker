import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { LoginService } from '../servicesapi/LoginService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /**
   * default properties
   */
  loginForm: FormGroup;
  isUserLegitimate: boolean = false;

  /**
   * Constructer with more properties added.
   * @param formBuilder 
   * @param router 
   * @param loginService 
   */
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService
     ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });
  }

  onSubmit() {

    // check for validation:
    if(this.loginForm.invalid) {
      return;
    }

    // create the pay-load to send to login-service:
    const payLoad = {
      userName: this.loginForm.controls['userName'].value,
      password: this.loginForm.controls['password'].value
    }

    // call the login-service:
    this.loginService.login(payLoad).subscribe(response => {
      if(response.data.status === 200) {
        alert("login succesfull")
        //this.router.navigate();
      }
      else {
        this.isUserLegitimate = false;
        alert(response.data.message);
      }
    })
  }

}
