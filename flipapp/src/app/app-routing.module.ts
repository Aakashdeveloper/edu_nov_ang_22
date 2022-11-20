import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { ListingComponent } from './listing/listing.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DetailsComponent } from './details/details.component';
import { PlaceOrderComponent } from './place-order/place-order.component';

const routes: Routes = [
   {path:'listing/:item',component: ListingComponent},
   {path:'home', component:HomeComponent},
   {path:'details', component:DetailsComponent},
   {path:'placeOrder/:itemName', component:PlaceOrderComponent},
   {path:'', component:HomeComponent},
   {path:'**',pathMatch:'full',component:NotfoundComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    providers: [],
    exports: [RouterModule]
})

export class AppRoutingModule{}