import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.model';
// import { ProductDetail } from '../product-detail/product-detail.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productUrl = 'https://codingthailand.com/api/get_courses.php';
  detailUrl = 'https://codingthailand.com/api/get_course_detail.php';  // เอาแค่นี้พอนะ จะไม่เอา param มานะ

  constructor(private http: HttpClient) {}

  getProduct(): Observable<Product[]>{
    return this.http.get<Product[]>(this.productUrl);
  }

  // getDetail(id: number): Observable<ProductDetail[]>{  // อันนี้คือ ลองใช้แบบ any บ้างนะ แต่ในงานจริงไม่ควรใช้นะ ควรทำเป็น model
  getDetail(id: number): Observable<any[]>{  // อันนี้คือ ลองใช้แบบ any บ้างนะ แต่ในงานจริงไม่ควรใช้นะ ควรทำเป็น model
    const myParams = {
      'course_id': id.toString(),
    }
    return this.http.get<any[]>(this.detailUrl, {params: myParams});
  }

}
