import { Component, ViewChild, viewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  @ViewChild('form', { static: false }) signupForm!: NgForm;
constructor(
  private auth:AuthService,
  private router:Router
){}

  onSubmit(form:NgForm){
    // console.log(form.value)
    // console.log(form)
    const email=form.value.email;
    const password=form.value.password;
    this.auth.signup(email,password).subscribe(()=>{
   this.router.navigate(['']);
   form.resetForm()
})
  

  }



}
