import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {catchError, retry} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  registerUrl = 'https://codingthailand.com/api/insert_user5.php';
  loginUrl = 'https://dev-fronc7em2fyl0yna.us.auth0.com/oauth/token';
  profileUrl = 'https://dev-fronc7em2fyl0yna.us.auth0.com/userinfo';


  constructor(private http: HttpClient) { }

  resister(formValues: any): Observable<any> {
    const myheaders = { 'content-type': 'application/json' };
    return this.http.post<any>(this.registerUrl, formValues, { headers: myheaders });  // จะต้องใส่่ url, body, header ให้รู้ว่าเป็น json นะ
  }

  login(loginForm: any): Observable<any> {
    const myheaders = { 'content-type': 'application/json' };
    const body =
    {
      'grant_type': 'password',
      'username': loginForm.email, // depends on which realm you chose
      'password': loginForm.password,
      'audience': 'https://dev-fronc7em2fyl0yna.us.auth0.com/api/v2/', // in case you need an access token for a specific API
      'scope': 'openid',  // จะดึงข้อมูลในรูปแบบไหน
      'client_id': 'S2iGBqR4FgclpLjquWetOWsiESXVeSfm'
    };
    return this.http.post<any>(this.loginUrl, body, { headers: myheaders }).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(error);  // เวลาที่ throw error ออกไป มันจะไปเข้า funciton ที่ 2 ของ subscribe นะ
  }

  isLogin(): boolean {
    let token = localStorage.getItem('token');  // มันมีโอกาสเป็น null ได้นะ
    if (token) {
      token = JSON.parse(token);  // เราจะแปลงจาก string ให้เป็น json object นะ (เหมือนกับ loads ใน Python ที่เป็น python object)
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('profile');
  }

  getProfile(): Observable<any> {
    const token = JSON.parse(localStorage.getItem('token')!);
    const myheaders = {
      'Authorization': 'Bearer ' + token.access_token
    }
    return this.http.get<any>(this.profileUrl, { headers: myheaders });
  }

}