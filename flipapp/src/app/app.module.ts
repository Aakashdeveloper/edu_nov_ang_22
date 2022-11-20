import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponent } from './Footer/Footer.component';
import { HeaderComponent } from './Header/Header.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AppRoutingModule } from './app-routing.module';
import { DetailsComponent } from './details/details.component';
import { DetailsService } from './services/details.service';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { HomeModule } from './Home/Home.module';
import { ListingModule } from './listing/lisiting.module';

@NgModule({
    // all the component and pipe
    declarations:[
        AppComponent,
        HeaderComponent,
        FooterComponent,
        NotfoundComponent,
        DetailsComponent,
        PlaceOrderComponent
    ],
    // All the modules
    imports:[
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        HomeModule,
        ListingModule
    ],
    // All the services
    providers:[
        DetailsService
    ],
    //only and only main component
    bootstrap:[
        AppComponent
    ]
})

export class AppModule {}