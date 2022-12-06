import { Component, OnInit } from '@angular/core';
import {seatData} from './seatData'
import {Seat,SeatSelection} from '../model/bus.model'
import {Router} from '@angular/router'
import {checkPermission,pages} from '../utils'
@Component({
  selector: 'app-seat-selection',
  templateUrl: './seat-selection.component.html',
  styleUrls: ['./seat-selection.component.css']
})

export class SeatSelectionComponent implements OnInit {
  seats : Seat[] = seatData
  total: number = 0
  buses : SeatSelection[] = []
  constructor(private router :Router) { }
  
  ngOnInit(): void {
    if(!checkPermission(pages.SEAT_SELECTION)){
      this.router.navigate(['/bus-search'])
    }
  }
  selectSeat(seat: Seat) : void {
    if(!this.buses.find(b => b.id === seat.id)){
      const selection : SeatSelection=  {...seat,type:'AC'}
      this.buses.push(selection)
    }else{
      this.buses = this.buses.filter(b => b.id !== seat.id)
    }
    this.total = this.buses.reduce(function (sum, obj) { return sum + parseInt(obj.cost); }, 0);
  }
  isSelectedSeat(seat: Seat): boolean {
     if(this.buses.find(b => b.id === seat.id)){
      return true
     }else{
      return false
     }
  }
  proceed(): void{
    console.log(this.buses)
    localStorage.setItem("seats", JSON.stringify(this.buses))
    this.router.navigate(['/passenger-information'])
  }
}
