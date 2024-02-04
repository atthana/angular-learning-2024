import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { ɵNullViewportScroller } from '@angular/common';

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

  constructor(private fb: FormBuilder, private authService: AuthService) {
    if (this.authService.isLogin()) {
      this.isLogin = true;
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
        }
      }
    );
  }

  logout() {
    this.authService.logout();
    this.isLogin = false;
  }
}
