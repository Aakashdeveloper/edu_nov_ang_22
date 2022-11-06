import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppComponent } from './app.component';
import { FooterComponent } from './Footer/Footer.component';
import { HeaderComponent } from './Header/Header.component';
import { HomeComponent } from './Home/Home.component';
import { ClothsComponent } from './Home/cloths/cloths.component';
import { MobileComponent } from './Home/mobile/mobile.component';
import { MyUpperPipe } from './pipes/myUpper.pipe';
import { ListingComponent } from './listing/listing.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
    // all the component and pipe
    declarations:[
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        ClothsComponent,
        MobileComponent,
        MyUpperPipe,
        ListingComponent,
        NotfoundComponent
    ],

    // All the modules
    imports:[
        BrowserModule,
        BrowserAnimationsModule,
        CarouselModule,
        AppRoutingModule
    ],

    // All the services
    providers:[],

    //only and only main component
    bootstrap:[
        AppComponent
    ]
})

export class AppModule {}