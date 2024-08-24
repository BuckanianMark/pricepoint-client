import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BasketService } from '../../basket/basket.service';
import { Observable } from 'rxjs';
import { IBasket, IBasketItem } from 'src/app/shared/models/basket';

@Component({
  selector: 'app-basket-summary',
  templateUrl: './basket-summary.component.html',
  styleUrl: './basket-summary.component.css'
})
export class BasketSummaryComponent implements OnInit{

  @Output() decrement:EventEmitter<IBasketItem> = new EventEmitter<any>();
  @Output() increment:EventEmitter<IBasketItem> = new EventEmitter<any>();
  @Output() remove:EventEmitter<IBasketItem> = new EventEmitter<any>();
  @Input() isBasket = true;
  basket$!:Observable<IBasket>
 
  constructor(public basketService:BasketService){}
  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
  }
  decrementQuantity(item:IBasketItem){
    this.decrement.emit(item)
  }
  incrementItemQuantity(item:IBasketItem){
    this.increment.emit(item)
  }
  removeBasketItem(item:IBasketItem){
    this.remove.emit(item)
  }
}
