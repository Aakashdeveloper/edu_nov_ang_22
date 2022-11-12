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
  catData:any[]=[]

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

}
