import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketComponent } from './basket.component';
import { BasketRoutingModule } from './basket-routing.module';
import { BasketSummaryComponent } from '../shared/basket-summary/basket-summary.component';
import { OrderTotalsComponent } from '../shared/order-totals/order-totals.component';



@NgModule({
  declarations: [BasketComponent,BasketSummaryComponent,OrderTotalsComponent],
  imports: [
    CommonModule,
    BasketRoutingModule
  ]
})
export class BasketModule { }
