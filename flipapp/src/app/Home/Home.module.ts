import { NgModule } from '@angular/core';

import { ClothsComponent } from './cloths/cloths.component';
import { MobileComponent } from './mobile/mobile.component';
import { HomeComponent } from './Home.component';
import { HomeService } from '../services/home.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        HomeComponent,
        ClothsComponent,
        MobileComponent
    ],
    imports: [
        SharedModule
    ],
    providers: [
        HomeService,
    ]
})

export class HomeModule{};