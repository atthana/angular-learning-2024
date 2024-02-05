import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent implements OnInit {
  unSafeUrl = 'javascript:alert("Click for using JS na.")';
  safeUrl!: SafeUrl;

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.safeUrl = this.domSanitizer.bypassSecurityTrustUrl(this.unSafeUrl);  // ต้องผ่าน bypassSecurity เพื่อให้มันใช้งาน js ได้นะ (เพราะ Angular มันกันไว้ให้ก่อนหน้า)
  }

}
