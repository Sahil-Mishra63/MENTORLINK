import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  isLoginMode = true; //if it is true it will show login otherwise register

  toggleMode(event: Event){
    event.preventDefault();
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmitLogin(){
    //logic must be here
    console.log("Login submited");
  }

  onSubmitRegister(){
    console.log("Registration submited");
  }
}
