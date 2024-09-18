// login.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthService} from "../Services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const loginData = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      };
      this.authService.authenticate(loginData).subscribe(
        (response) => {
          console.log('Authentication successful', response);
          // Store token and handle routing
          localStorage.setItem('token', response.token);

        },
        (error) => {
          console.error('Authentication failed', error);
        }
      );
      this.router.navigate(['afficher-projet'])
    }
  }
}
