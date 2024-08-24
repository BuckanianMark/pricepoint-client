import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AudioPageComponent } from './audio-page/audio-page.component';
import { ComputingProductsComponent } from './computing-products/computing-products.component';
import { GamingProductsComponent } from './gaming-products/gaming-products.component';
import { PhoneProductsComponent } from './phone-products/phone-products.component';

const routes:Routes = [
  {path:"",component:ShopComponent},
  {path:"type/audio-products",component:AudioPageComponent,data:{breadcrumb:"audio-products"}},
  {path:"type/computing-products",component:ComputingProductsComponent,data:{breadcrumb:"computing-products"}},
  {path:"type/gaming-products",component:GamingProductsComponent,data:{breadcrumb:"gaming-products"}},
  {path:"type/phones&tablets",component:PhoneProductsComponent,data:{breadcrumb:"phones&tablets"}},
  {path:":id",component:ProductDetailsComponent,data:{breadcrumb:{alias:"productDetails"}}},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class ShopRoutingModule { }
