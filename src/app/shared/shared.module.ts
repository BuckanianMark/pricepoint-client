import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagerComponent } from './pager/pager.component';
import {PagingHeaderComponent} from './paging-header/paging-header.component'
//import { OrderTotalsComponent } from './order-totals/order-totals.component';



@NgModule({
  declarations: [
    PagerComponent,
    PagingHeaderComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
