import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  users = {
    province: [
      { id: 1, name: 'อุบลราชธานี' },
      { id: 2, name: 'กรุงเทพฯ' },
      { id: 3, name: 'ภูเก็ต' },
    ]
  }

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  register(formValues: any) {
    console.log(formValues);

    this.authService.resister(formValues).subscribe(
      (feedback) => {
        if (feedback.status === 'ok') {
          alert(feedback.message);
          this.router.navigate(['/']);  // หน้าแรกก็คือ '/' นะ
        } else {
          alert(feedback.message);
        }
      }
    );
  }

}
