import { NgModule } from '@angular/core';
import { ListingComponent } from './listing.component';
import { CostFilter } from '../filter/costFilter.component';
import { RatingFilter } from '../filter/ratingFilter.component';
import { ProdSearchPipe } from '../pipes/search.pipe';
import { ListingService } from '../services/listing.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        ListingComponent,
        RatingFilter,
        ProdSearchPipe,
        CostFilter,
    ],
    imports: [
        SharedModule
    ],
    providers: [
        ListingService
    ]
})

export class ListingModule{};