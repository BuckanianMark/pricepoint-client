import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';
import { IProduct } from 'src/app/shared/models/product';

@Component({
  selector: 'app-television-products',
  templateUrl: './television-products.component.html',
  styleUrl: './television-products.component.css'
})
export class TelevisionProductsComponent implements OnInit{
  products!:IProduct[]


  constructor(private shopservoice:ShopService){}
  loadTelevisionProducts(){
    this.shopservoice.getTelevisionProducts().subscribe((data) => {
      this.products = data
    })
  }
  ngOnInit(): void {
  }

}
