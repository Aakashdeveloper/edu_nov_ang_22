import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { ListingComponent } from './listing/listing.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DetailsComponent } from './details/details.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { ViewBookingComponent } from './view-booking/view-booking.component';
import { LoginComponent } from './loginForm/login.component';
import { RegisterComponent } from './registerForm/register.component';


const routes: Routes = [
   {path:'listing/:item',component: ListingComponent},
   {path:'home', component:HomeComponent},
   {path:'login', component:LoginComponent},
   {path:'register', component:RegisterComponent},
   {path:'details', component:DetailsComponent},
   {path:'viewOrder', component:ViewBookingComponent},
   {path:'placeOrder/:itemname', component:PlaceOrderComponent},
   {path:'', component:HomeComponent},
   {path:'**',pathMatch:'full',component:NotfoundComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    providers: [],
    exports: [RouterModule]
})

export class AppRoutingModule{}