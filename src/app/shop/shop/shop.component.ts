import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IProduct } from 'src/app/shared/models/product';
import { ShopService } from '../shop.service';
import { IBrand } from 'src/app/shared/models/brands';
import { IType } from 'src/app/shared/models/producType';
import { ShopParams } from 'src/app/shared/models/ShopParams';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent implements OnInit{
  @ViewChild('search',{static:false}) searchTerm!:ElementRef;

  products:IProduct[] | any;
  productsForlatest:IProduct[] | any;
  latestProducts!:IProduct[];
  brands!:IBrand[]
  types!:IType[]
  shopParams = new ShopParams();

  totalCount!:number;
  sortOptions = [
    {name:'Alphabetical', value:'name'},
    {name:'Price:Low to High',value:'priceAsc'},
    {name:'Price:High to Low',value:'priceDesc'},
    
  ];
  

  constructor(private shopService:ShopService){}

  ngOnInit(): void {
  this.getProductsForLatest();
  this.getProducts();
  console.log(this.products)
  this.getBrands();
  this.getTypes();
  }

  getProducts(){
    this.shopService.getProducts(this.shopParams).subscribe(res => {
      this.products = res;
      this.shopParams.pageNumber = res!.pageIndex;
      this.shopParams.pageSize = res!.pageSize;
      this.totalCount = res!.count
    },error => console.log(error))
  }


  getProductsForLatest(){
    this.shopService.getForLatestProducts().subscribe(res => {
      this.productsForlatest = res;
      this.filterLatest();
   
  },error => {
    console.log(error)
  })
  }
  filterLatest(){
      this.latestProducts = this.productsForlatest.filter((product:IProduct) => product.latest === true)
  }
  getBrands(){
    this.shopService.getBrands().subscribe(res => {
      this.brands = [{id:0,name:'All'},...res]
    },error => {
      console.log(error)
    })
  }
  getTypes(){
    this.shopService.getTypes().subscribe(res => {
      this.types = res;
    },error => {
      console.log(error)
    })
  }
 onBrandSelected(brandId: number){
  this.shopParams.brandId= brandId;
  console.log("Selected")
  this.getProducts()
 }



 onTypeSelected(typeId:number){
  this.shopParams.typeId = typeId;
  this.getProducts();
 }

 onSortSeleted(sort:string){
  this.shopParams.sort = sort;
  this.getProducts();

 }
 onSearch(){
  this.shopParams.search = this.searchTerm.nativeElement.value;
  this.getProducts()
 }
 onReset(){
  this.searchTerm.nativeElement.value = '';
  this.shopParams = new ShopParams();
  this.getProducts();
 }

}
