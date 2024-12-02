
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm : FormGroup

  constructor(private fb:FormBuilder){
    this.loginForm = this.fb.group({
      username:['',[Validators.required,Validators.pattern("touchworld")]],
      password:['',[Validators.required,Validators.pattern("touchworldTech")]]
    })
  }
 
}
