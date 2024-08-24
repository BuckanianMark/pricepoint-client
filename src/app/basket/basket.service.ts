import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Basket, IBasket, IBasketItem, IBasketTotals } from '../shared/models/basket';
import {v4 as uuidv4} from 'uuid';
import { IProduct } from '../shared/models/product';
import { DeliveryMethod } from '../shared/models/deliveryMethod';

@Injectable({
  providedIn: 'root'
})
export class BasketService implements OnInit{
   baseUrl = 'http://pricepointapi.com/api/'
  shipping = 0 ;
  initialBasketTotals = {
    shipping:0,
    subTotal:0,
    total:0
  }
  initialBasket= {
    id:uuidv4(),
    items:[]
  
 };
  private basketSource = new BehaviorSubject<IBasket>(this.initialBasket);
  basket$ = this.basketSource.asObservable();
  private basketTotalSource = new BehaviorSubject<IBasketTotals>(this.initialBasketTotals);
  basketTotals$  = this.basketTotalSource.asObservable();
  
  constructor(private httpClient:HttpClient){ }
  ngOnInit(): void {
  }
  setShippingPrice(deliveryMethod:DeliveryMethod){
    this.shipping = deliveryMethod.price;
    this.calculateTotals()
  }
  getBasket(id:string){
    return this.httpClient.get(this.baseUrl + 'basket?id=' + id)
        .pipe(
          map((basket) => {
            this.basketSource.next(basket as IBasket)
            console.log(this.getCurrentBasketValue());
            this.calculateTotals();
          })
        )
  }
  setBasket(basket:IBasket){
    return this.httpClient.post(this.baseUrl + 'basket',basket).subscribe((res) => {
      this.basketSource.next(res as IBasket)
      // console.log(res)
      this.calculateTotals();
      localStorage.setItem('basket_id',basket.id)
    },error => {
      console.log(error)
    })
  }
  getCurrentBasketValue(){
    return this.basketSource.value;
  }

  addItemToBasket(item:IProduct,quantity = 1){
    const itemToAdd:IBasketItem = this.mapProductITemToBasketItem(item,quantity);
    const basket = this.getCurrentBasketValue() ?? this.createBasket();
    // console.log(basket);
    basket.items = this.addOrUpdateItem(basket.items,itemToAdd,quantity);
    this.setBasket(basket);
  }
  incrementItemQuantity(item:IBasketItem){
    const basket = this.getCurrentBasketValue();
    const foundItemIndex = basket.items.findIndex(x => x.id === item.id);
    basket.items[foundItemIndex].quantity++;
    this.setBasket(basket)
  }
  decrementItemQuantity(item:IBasketItem){
     const basket =  this.getCurrentBasketValue();
     const foundItemIndex = basket.items.findIndex(x => x.id === item.id);
     if(basket.items[foundItemIndex].quantity > 1){
      basket.items[foundItemIndex].quantity--;
      this.setBasket(basket)
     }else{
      this.removeItemFromBasket(item);
     }
  }
  removeItemFromBasket(item: IBasketItem) {
    const basket = this.getCurrentBasketValue();
    if(basket.items.some(x => x.id === item.id)){
      basket.items = basket.items.filter(i => i.id !== item.id);
      if(basket.items.length > 0){
        this.setBasket(basket)
      }else{
        console.log("Method 2 called")
        this.deleteBasket(basket);
      }
    }
  }
  private calculateTotals(){
    const basket = this.getCurrentBasketValue();
    const shipping = this.shipping;
    const subTotal = basket.items.reduce((a,b) => (b.price * b.quantity) + a,0)
    const total = shipping + subTotal;
    this.basketTotalSource.next({shipping,total,subTotal})
  }
  deleteBasket(basket: IBasket) {
    console.log("Method 1 called")
    return this.httpClient.delete(this.baseUrl + 'api/basket?id' + basket.id).subscribe(() => {
      this.basketSource.next(this.initialBasket);
      this.basketTotalSource.next(this.initialBasketTotals);
      localStorage.removeItem('basket_id')
    })
  }

  private addOrUpdateItem(items: IBasketItem[], itemToAdd: IBasketItem, quantity: number): IBasketItem[] {
    console.log(items)
    const index = items.findIndex(i => i.id === itemToAdd.id);
    if(index === -1){
      itemToAdd.quantity = quantity;
      items.push(itemToAdd);
    }else{
      items[index].quantity += quantity;
    }
    return items
  }
  private createBasket(): IBasket {
    const basket = new Basket();
    localStorage.setItem('basket-id',basket.id);
    return basket;

  }
  private mapProductITemToBasketItem(item: IProduct, quantity: number): IBasketItem {
   return{
    id:item.id,
    productName:item.productName,
    price:item.price,
    pictureUrl:item.productImage,
    quantity,
    brand:item.productBrand,
    type:item.productType
   }
  }
  deleteLocalBasket(){
    this.basketSource.next(this.initialBasket);
    this.basketTotalSource.next(this.initialBasketTotals);
    localStorage.removeItem('basket_id')
  }
  
}





