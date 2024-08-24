import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { HomePageComponent } from './pages/home-page/home-page.component';
//import { AudioPageComponent } from './shop/audio-page/audio-page.component';
import { HomeComponent } from './home/home.component';
//import { ShopComponent } from './shop/shop/shop.component';
import { TestErrorComponent } from './core/test-error/test-error.component';
import { ServerErrorComponent } from './core/server-error/server-error.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { authGuard } from './core/guards/auth.guard';
//import { ProductDetailsComponent } from './shop/product-details/product-details.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"test-error",component:TestErrorComponent},
  {path:"server-error",component:ServerErrorComponent},
  {path:"not-found-error",component:NotFoundComponent},
  {path:"shop",loadChildren:() => import("./shop/shop.module").then(mod => mod.ShopModule)},
  {path:"basket",loadChildren:() => import("./basket/basket.module").then(mod => mod.BasketModule)},
  {path:"checkout",loadChildren:() => import("./checkout/checkout.module").then(mod => mod.CheckoutModule),canActivate:[authGuard]},
  {path:"account",loadChildren:() => import("./account/account.module").then(mod => mod.AccountModule)},
  {path:"**",redirectTo:'not-found',pathMatch:'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
