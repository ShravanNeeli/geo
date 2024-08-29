import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(
    private router:Router,
    private auth:AuthService){};


  toSignup(){
    this.router.navigate(['/signup'])
  };


  onsubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.auth.login(email, password).subscribe(()=>{
       this.router.navigate(['/header']);}
    )
   }


 



}