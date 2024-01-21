import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  register(formValues: any) {
    console.log(formValues);

  }

}
