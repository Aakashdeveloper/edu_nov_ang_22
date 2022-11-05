import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './Footer/Footer.component';
import { HeaderComponent } from './Header/Header.component';
import { HomeComponent } from './Home/Home.component';
import { ClothsComponent } from './Home/cloths/cloths.component';
import { MobileComponent } from './Home/mobile/mobile.component';

@NgModule({
    // all the component and pipe
    declarations:[
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        ClothsComponent,
        MobileComponent
    ],

    // All the modules
    imports:[
        BrowserModule
    ],

    // All the services
    providers:[],

    //only and only main component
    bootstrap:[
        AppComponent
    ]
})

export class AppModule {}