import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"customer",
    loadChildren:()=>import('./customer/customer.module').then(a=>a.CustomerModule),
    data:{preload:true}
  },
  {
    path:"product",
    loadChildren:()=>import('./product/product.module').then(a=>a.ProductModule),
    data:{preload:false}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
