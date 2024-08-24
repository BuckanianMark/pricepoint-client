import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPagination } from '../shared/models/IPagination';
import { IProduct } from '../shared/models/product';
import { IBrand } from '../shared/models/brands';
import {IType} from '../shared/models/producType'
import { map } from 'rxjs/operators';
import { ShopParams } from '../shared/models/ShopParams';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'http://pricepointapi.com/api/'
  latestproducts!:IProduct[];

  constructor(private http:HttpClient) { }

  getProducts(shopParams:ShopParams){

    let params = new HttpParams();

    if(shopParams.brandId){
      params = params.append('brandId',shopParams.brandId.toString());
    }
    if(shopParams.typeId){
      params = params.append('brandId',shopParams.typeId.toString());
    }
    if(shopParams.sort){
      params = params = params.append('sort',shopParams.sort);
    }
    if(shopParams.search)
    {
      params = params.append('search',shopParams.search);
    }

    return this.http.get<IPagination>(this.baseUrl + 'products',{observe:'response',params})
      .pipe(
        map(res =>{
          return res.body
        })
      )
  }
  getProduct(id:number)
  {
    return this.http.get<IProduct>(this.baseUrl + 'Products/' + id)
  }

  getAudioProducts(){
    return this.http.get<IProduct[]>(this.baseUrl + 'Products?typeId='+1)
  }
  getComputingProducts(){
    return this.http.get<IProduct[]>(this.baseUrl + 'Products?typeId='+2)
  }
  getGamingProducts(){
    return this.http.get<IProduct[]>(this.baseUrl + 'Products?typeId='+3)
  }
  getPhoneProducts(){
    return this.http.get<IProduct[]>(this.baseUrl + 'Products?typeId='+4)
  }
  getTelevisionProducts(){
    return this.http.get<IProduct[]>(this.baseUrl + 'Products?typeId='+5)
  }

  getForLatestProducts(){
    return this.http.get<IProduct[]>(this.baseUrl + 'products?pageSize=5')
  }
  getBrands(){
   return this.http.get<IBrand[]>(this.baseUrl + 'products/brands');
  }
  getTypes(){
    return this.http.get<IType[]>(this.baseUrl + 'products/types');
  }

}

