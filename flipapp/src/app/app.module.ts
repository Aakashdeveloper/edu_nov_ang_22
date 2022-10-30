import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './Footer/Footer.component';
import { HeaderComponent } from './Header/Header.component';

@NgModule({
    // all the component and pipe
    declarations:[
        AppComponent,
        HeaderComponent,
        FooterComponent
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