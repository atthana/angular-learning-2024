import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { NewsComponent } from './news/news.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'product/:id/:title', component: ProductDetailComponent},
  { path: 'news', component: NewsComponent},
  // { path: 'xx', loadChildren: './dashboard/dashboard.module#DashboardModule'},
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
  { path: '**', component: PagenotfoundComponent},  // อันนี้ต้องไว้ล่างสุดเสมอนะ
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
