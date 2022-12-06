import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusSearchComponent } from './bus-search/bus-search.component';
import { BusListPageComponent } from './bus-list-page/bus-list-page.component';
import { SeatSelectionComponent } from './seat-selection/seat-selection.component';
import { PassengerInformationComponent } from './passenger-information/passenger-information.component';
import { ReviewBusTicketComponent } from './review-bus-ticket/review-bus-ticket.component';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BusSearchComponent,
    BusListPageComponent,
    SeatSelectionComponent,
    PassengerInformationComponent,
    ReviewBusTicketComponent,
    ViewTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
