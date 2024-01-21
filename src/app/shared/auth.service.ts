import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  registerUrl = 'https://codingthailand.com/api/insert_user5.php';


  constructor(private http: HttpClient) { }

  resister(formValues: any): Observable<any> {
    const myheaders = { 'content-type': 'application/json' };
    return this.http.post<any>(this.registerUrl, formValues, { headers: myheaders });  // จะต้องใส่่ url, body, header ให้รู้ว่าเป็น json นะ
  }
}
