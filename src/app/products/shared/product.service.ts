import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productUrl = 'https://codingthailand.com/api/get_courses.php';

  constructor(private http: HttpClient) {}

  getProduct(): Observable<Product[]>{
    return this.http.get<Product[]>(this.productUrl);
  }
}
