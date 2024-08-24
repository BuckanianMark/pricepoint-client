import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop/shop.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { SearchComponent } from '../partials/search/search.component';
import { AudioPageComponent } from './audio-page/audio-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShopRoutingModule } from './shop-routing.module';
import { ComputingProductsComponent } from './computing-products/computing-products.component';
import { GamingProductsComponent } from './gaming-products/gaming-products.component';
import { PhoneProductsComponent } from './phone-products/phone-products.component';
import { TelevisionProductsComponent } from './television-products/television-products.component';



@NgModule({
  declarations: [ShopComponent,ProductItemComponent,SearchComponent,AudioPageComponent,ProductDetailsComponent,ComputingProductsComponent,GamingProductsComponent,PhoneProductsComponent,TelevisionProductsComponent],
  imports: [
    CommonModule,
    ShopRoutingModule
  ],
  exports:[]
})
export class ShopModule { }
