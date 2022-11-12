import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule } from '@angular/forms';

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
import { HomeService } from './services/home.service';
import { ListingService } from './services/listing.service';
import { RatingFilter } from './filter/ratingFilter.component';


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
        NotfoundComponent,
        RatingFilter
    ],

    // All the modules
    imports:[
        BrowserModule,
        BrowserAnimationsModule,
        CarouselModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],

    // All the services
    providers:[
        HomeService,
        ListingService
    ],

    //only and only main component
    bootstrap:[
        AppComponent
    ]
})

export class AppModule {}