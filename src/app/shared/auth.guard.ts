import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('Authguard work !!!');

    if (this.authService.isLogin()) {  // Logic เราตอนนี้มีแค่ login หรือ ไม่แค่นั้นนะ
      return true;  // ในความเป็นจริงจะมาเช็ค admin, roles อื่นๆก็ตรงนี้ได้เลย
    } else {
      return false;
    }

    // return false;  // true เข้าได้, false เข้าหน้า dashboard ไม่ได้
  }

}
