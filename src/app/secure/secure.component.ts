import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent implements OnInit {
  unSafeUrl = 'javascript:alert("ok")';

  constructor() { }

  ngOnInit(): void {
  }

}
