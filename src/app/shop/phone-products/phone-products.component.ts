import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/models/product';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-phone-products',
  templateUrl: './phone-products.component.html',
  styleUrl: './phone-products.component.css'
})
export class PhoneProductsComponent implements OnInit{

  products!:IProduct[];
  constructor(private shopservice:ShopService){}
  loadPhoneProducts(){
    this.shopservice.getPhoneProducts().subscribe((data) => {
      this.products = data
    })
  }

  ngOnInit(): void {
    this.loadPhoneProducts();
  }

}
