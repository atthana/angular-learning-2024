import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  title = 'About Q';
  logo = './assets/images/logo-jennie.png';
  logoWidth = 400;
  isShow = true;
  users = ['John', 'Mary', 'Bob'];
  courses = [
    {'name': 'PHP', 'price': 100},
    {'name': 'Angular', 'price': 150},
    {'name': 'ReactP', 'price': 200},
  ];
  myColor = 'yellow';
  isActive = false;

  constructor() { }

  ngOnInit(): void {
  }

  go(){
    // alert('Hello GRASSROOT Q');
    this.title = 'LOVE YOU';
    this.myColor = 'green';
    this.isActive = true;
  }

}
