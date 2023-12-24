import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  id!: number;
  productDetail: any[] | undefined;
  title!: string;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));  // เราต้อง casting string ให้เป็น number นะ
    this.title = this.route.snapshot.paramMap.get('title') || '';
    this.getDetail();
  }

  getDetail(){
    this.productService.getDetail(this.id).subscribe(
      (productDetail) => {  // productDetail อันนี้คือ result ที่มาจาก BE ที่ get มาได้นะ
        console.log(productDetail);
        
        this.productDetail = productDetail;
      }
    )
  }

}
