import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyUpperPipe } from '../pipes/myUpper.pipe';

@NgModule({
    declarations: [ 
        MyUpperPipe
    ],
    imports: [
        CommonModule,
        CarouselModule,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
    ],
    providers: [],
    exports:[
        MyUpperPipe,
        CommonModule,
        CarouselModule,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule
    ]
})

export class SharedModule{};