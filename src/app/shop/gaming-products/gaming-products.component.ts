import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';
import { IProduct } from 'src/app/shared/models/product';

@Component({
  selector: 'app-gaming-products',
  templateUrl: './gaming-products.component.html',
  styleUrl: './gaming-products.component.css'
})
export class GamingProductsComponent implements OnInit{
  products!:IProduct[]

  constructor(private shopservice:ShopService){}

  ngOnInit(): void {
    this.loadGamingProducts();
  }

  loadGamingProducts(){
    this.shopservice.getGamingProducts().subscribe((data) => {
      this.products = data
    })
  }

}
