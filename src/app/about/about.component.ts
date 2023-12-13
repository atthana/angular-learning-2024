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

  constructor() { }

  ngOnInit(): void {
  }

  go(){
    // alert('Hello GRASSROOT Q');
    this.title = 'LOVE YOU'
  }

}
