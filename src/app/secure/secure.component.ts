import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent implements OnInit {
  unSafeUrl = 'javascript:alert("Click for using JS na.")';
  safeUrl!: SafeUrl;

  // <iframe width="560" height="315" src="https://www.youtube.com/embed/52Xq6AaRnT4?si=pzSw9iluppLWcQxH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  unSafeYoutube = 'https://www.youtube.com/embed/52Xq6AaRnT4?si=pzSw9iluppLWcQxH';
  safeYoutube!: SafeResourceUrl;

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.safeUrl = this.domSanitizer.bypassSecurityTrustUrl(this.unSafeUrl);  // ต้องผ่าน bypassSecurity เพื่อให้มันใช้งาน js ได้นะ (เพราะ Angular มันกันไว้ให้ก่อนหน้า)
    this.safeYoutube = this.domSanitizer.bypassSecurityTrustResourceUrl(this.unSafeYoutube);
  }

}
