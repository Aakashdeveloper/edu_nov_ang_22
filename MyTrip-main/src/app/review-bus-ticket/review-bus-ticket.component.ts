import { Component, OnInit } from '@angular/core';
import {Bus} from '../model/bus.model'
import {Router} from '@angular/router'
import { generateTicketId } from '../utils';
import { Journey } from '../model/journey.model';
import { places } from '../data/sample';
import {checkPermission,pages} from '../utils'
@Component({
  selector: 'app-review-bus-ticket',
  templateUrl: './review-bus-ticket.component.html',
  styleUrls: ['./review-bus-ticket.component.css']
})
export class ReviewBusTicketComponent implements OnInit {
  
  seats : Bus[] = JSON.parse(localStorage.getItem('seats') || '') || [];
  journey : Journey = JSON.parse(localStorage.getItem('journey') || '') || {};
  busDetails : Bus = JSON.parse(localStorage.getItem('bus') || '') || {};
  selectedSeats : string = ''
  ticketId :string = ''
  from : string = ''
  to : string = ''
  constructor(private router :Router) { }
  ngOnInit(): void {
    if(!checkPermission(pages.REVIEW)){
      this.router.navigate(['/bus-search'])
    }
    this.seats.forEach(seat => {
      this.selectedSeats = this.selectedSeats !== '' ? this.selectedSeats + ',' + seat.id : this.selectedSeats + seat.id;
    })
    this.from = places.find(from => from.id === this.journey.from)?.city || ''
    this.to = places.find(to => to.id === this.journey.to)?.city || ''
  }
  proceed(): void{
    this.ticketId = generateTicketId(20)
    localStorage.setItem('ticketId', this.ticketId)
    this.router.navigate(['/view-bus-ticket'],{queryParams:{review:true}})
  }

}
