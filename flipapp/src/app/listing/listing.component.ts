import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListingService } from '../services/listing.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  catName:string='';
  userInput:string=''
  catData:any[]=[];
  afterClick:string=''
  filterText:string='Rating Filter'
  filterText1:string='Cost Filter'

  constructor(
    private route:ActivatedRoute,
    private listingService:ListingService
  ) { }

  ngOnInit(): void {
    // to get value from url
    this.catName = this.route.snapshot.params['item'];
    sessionStorage.setItem('catName', this.catName);
    this.listingService.getDataWrtC(this.catName)
      .subscribe((data:any[]) => this.catData = data)
  }

  dataReceive(ratingVal:string){
    console.log(">>>rating Val",ratingVal)
    this.listingService.getDataWrtR(ratingVal,this.catName)
      .subscribe((data:any[]) => {
        this.catData = data
      })
  }

  costDataReceive(cost:string){
    let lcost = Number(cost.split('-')[0])
    let hcost = Number(cost.split('-')[1])
    this.listingService.getDataWrtCost(lcost,hcost,this.catName)
      .subscribe((data:any[]) => {
        this.catData = data
      })
  }

  myClick=()=>{
    this.afterClick = "Event Binding Done"
  }

}
