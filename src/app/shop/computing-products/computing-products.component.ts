import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';
import { IProduct } from 'src/app/shared/models/product';

@Component({
  selector: 'app-computing-products',
  templateUrl: './computing-products.component.html',
  styleUrl: './computing-products.component.css'
})
export class ComputingProductsComponent implements OnInit{
  products!:IProduct[];

  constructor(private shopService:ShopService){}
  ngOnInit(): void {
    this.loadComputingProducts()
  }
  loadComputingProducts(){
    this.shopService.getComputingProducts().subscribe((data) => {
      console.log(data)
      this.products = data

    })
  }

}
