import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { TestErrorComponent } from './test-error/test-error.component';
import { SectionHeaderComponent } from './section-header/section-header.component';
//import { BreadcrumbModule } from 'xng-breadcrumb';



@NgModule({
  declarations: [TestErrorComponent,SectionHeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
   //BreadcrumbModule
  
  ],
  exports:[TestErrorComponent,SectionHeaderComponent]
})
export class CoreModule { }
