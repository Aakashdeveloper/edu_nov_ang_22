import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {places} from '../data/sample'
import {Journey} from '../model/journey.model'
@Component({
  selector: 'app-bus-search',
  templateUrl: './bus-search.component.html',
  styleUrls: ['./bus-search.component.css']
})
export class BusSearchComponent implements OnInit {
  places : any[] = places
  journey : Journey = {
    from :'',
    to: '',
    date: undefined,
  }
  selectedDate:any= {}; 
  
  constructor(private router :Router){} 
  ngOnInit(): void {
    localStorage.clear()
  }
  getBusList() : void{ 
    this.journey.date = `${this.selectedDate.day}/${this.selectedDate.month}/${this.selectedDate.year}`
    localStorage.setItem('journey', JSON.stringify(this.journey))
    this.router.navigate(['/bus-list-page']);
  }
}
