import { Component, OnInit } from '@angular/core';
import { Bus } from '../model/bus.model';
import {Router} from '@angular/router'
import {BusMaps} from '../data/sample'
import { Journey } from '../model/journey.model';
import {checkPermission,pages} from '../utils'
@Component({
  selector: 'app-bus-list-page',
  templateUrl: './bus-list-page.component.html',
  styleUrls: ['./bus-list-page.component.css']
})
export class BusListPageComponent implements OnInit {
  journeyDetails : Journey = JSON.parse(localStorage.getItem('journey') || '') || {}
  from : string = this.journeyDetails.from
  to : string = this.journeyDetails.to
  selectedBus : any = null
  constructor(private router :Router) { }
  buslist: Bus[] = BusMaps.filter(e => e.from === this.from && e.to === this.to)

  ngOnInit(): void {
    if(!checkPermission(pages.BUS_LIST)){
      this.router.navigate(['/bus-search'])
    }
  }
  getBusList(id: string):void {
    this.selectedBus = this.buslist.find(b => b.id === id)
    localStorage.setItem('bus',JSON.stringify(this.selectedBus))
    this.router.navigate(['/seat-selection'],{queryParams:{busid:id}})
  }

}
