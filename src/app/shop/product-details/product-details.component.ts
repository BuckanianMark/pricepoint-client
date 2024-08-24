import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/models/product';
import { ShopService } from '../shop.service';
import { ActivatedRoute } from '@angular/router';
//import { BreadcrumbService } from 'xng-breadcrumb';
import { BasketService } from 'src/app/basket/basket.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{
  product!:IProduct
  quantity = 1;

  constructor(private basketService:BasketService,private shopservice:ShopService,private activatedRoute:ActivatedRoute)
  {
    // this.bcService.set('@productDetails','');
  }
  ngOnInit(): void {
    this.loadProduct();
  }
  addItemToBasket()
  {
    this.basketService.addItemToBasket(this.product,this.quantity)
  }
  incrementQuantity(){
    this.quantity++;
  }
  decrementQuantity(){
    if(this.quantity > 1) this.quantity--; 
    
  }
  loadProduct(){
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if(id) this.shopservice.getProduct(+id).subscribe(product => {
      this.product = product
      // this.bcService.set('@productDetails',product.productName)
    },error => {
      console.log(error)
    })
  }
 
}
