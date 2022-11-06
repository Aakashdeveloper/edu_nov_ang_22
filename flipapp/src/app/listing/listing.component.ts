import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  itemType:string=''

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    // to get value from url
    this.itemType = this.route.snapshot.params['item'];
  }

}
