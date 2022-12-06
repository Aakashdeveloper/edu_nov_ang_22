import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { Bus, SeatSelection } from '../model/bus.model';
import {Router} from '@angular/router'
import { Journey } from '../model/journey.model';
import { places } from '../data/sample';
import {checkPermission,pages} from '../utils'
@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.css']
})
export class ViewTicketComponent implements OnInit {
  ticketId : string = localStorage.getItem('ticketId') || ''
  user : User = JSON.parse(localStorage.getItem('userDetails') || '') || {};
  seats : SeatSelection[] = JSON.parse(localStorage.getItem('seats') || '') || [];
  journeyDetails : Journey = JSON.parse(localStorage.getItem('journey') || '') || [];
  bus : Bus = JSON.parse(localStorage.getItem('bus') || '') || [];
  type : string = ''
  selectedSeats : string = ''
  totalFare : number = 0
  from : string = ''
  to : string = ''
  constructor(private router :Router) { }

  ngOnInit(): void {
    if(!checkPermission(pages.TICKET)){
      this.router.navigate(['/bus-search'])
    }
    this.seats.forEach(seat => {
      this.selectedSeats = this.selectedSeats !== '' ? this.selectedSeats + ' ' + seat.id : this.selectedSeats + seat.id;
      this.totalFare = this.totalFare + parseInt(seat.cost)
      this.type = seat.type
    })
    this.from = places.find(from => from.id === this.journeyDetails.from)?.city || ''
    this.to = places.find(to => to.id === this.journeyDetails.to)?.city || ''
  }
  goBack(): void {
    this.router.navigate(['/bus-search'])
  }

}
