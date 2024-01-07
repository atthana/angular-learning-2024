import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
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
  // { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},  // อันนี้คือ แบบเก่านะ
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},  // https://angular.io/guide/lazy-loading-ngmodules#lazy-loading-basics
  { path: '**', component: PagenotfoundComponent},  // อันนี้ต้องไว้ล่างสุดเสมอนะ
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, {useHash: true})],  // Angular แบบใหม่ ไม่ต้องใช้ useHash แล้ว
  imports: [RouterModule.forRoot(routes, {useHash: true, preloadingStrategy: PreloadAllModules})],  // Angular แบบใหม่ ไม่ต้องใช้ useHash แล้ว
  exports: [RouterModule]
})
export class AppRoutingModule { }
