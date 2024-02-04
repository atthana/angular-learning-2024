import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { ɵNullViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required, Validators.minLength(3)]]
  })
  isLogin = false;
  token = null;
  profile: any;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    if (this.authService.isLogin()) {
      this.isLogin = true;
      this.profile = JSON.parse(localStorage.getItem('profile')!);
    }
  }

  ngOnInit(): void {
  }

  login() {
    console.log('---------value-------');
    console.log(this.loginForm.value);

    this.authService.login(this.loginForm.value).subscribe(
      (token) => {
        if (token) {
          this.isLogin = true;
          alert('เข้าสู่ระบบเรียบร้อย');
          localStorage.setItem('token', JSON.stringify(token));  // stringify เอาไว้แปลง ts to json นะ

          this.authService.getProfile().subscribe(
            (profile) => {
              if (profile) {
                localStorage.setItem('profile', JSON.stringify(profile));
                this.profile = JSON.parse(localStorage.getItem('profile')!);
              }
            }
          );
        }
      }
    );
  }

  logout() {
    this.authService.logout();
    this.isLogin = false;
    this.router.navigate(['/']);
    this.loginForm.reset();
  }
}
