import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BusSearchComponent} from './bus-search/bus-search.component'
import {BusListPageComponent} from './bus-list-page/bus-list-page.component'
import {PassengerInformationComponent} from './passenger-information/passenger-information.component'
import {ReviewBusTicketComponent} from './review-bus-ticket/review-bus-ticket.component'
import {SeatSelectionComponent} from './seat-selection/seat-selection.component'
import {ViewTicketComponent} from './view-ticket/view-ticket.component'

const routes: Routes = [{
  path: '',
  component : BusSearchComponent,
},
{
  path: 'bus-search',
  component : BusSearchComponent,
},
{
  path: 'bus-list-page',
  component : BusListPageComponent,
},
{
  path: 'passenger-information',
  component : PassengerInformationComponent,
},
{
  path: 'review-bus-ticket',
  component : ReviewBusTicketComponent,
},
{
  path: 'seat-selection',
  component : SeatSelectionComponent,
},
{
  path: 'view-bus-ticket',
  component : ViewTicketComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

