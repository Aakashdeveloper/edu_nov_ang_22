import { Component, OnInit} from '@angular/core';
import { ITop } from '../model/home.model';
import { HomeService } from '../services/home.service'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    // heading:string = "Top Strip Section";
    // testImage:string = "https://b.zmtcdn.com/data/reviews_photos/51b/7b7779a74b0ac806ac690da9cb55d51b_1560845012.jpg";
    opend:any = new Date();
    price:number = 100

    topData:ITop[] = [ ]
    
    // Any declarations
    constructor(private homeService:HomeService){
      console.log("inside constructor")
    }

    // any thing that we want to call on page load
    ngOnInit():void{
      this.homeService.getTopStrip()
          .subscribe((data:ITop[]) => this.topData = data)
    }



    carouselImage:any[]=[
      {"name":"assets/images/carousel-imgs/oppo-k10.jpg"},
      {"name":"assets/images/carousel-imgs/redmi10.jpg"},
      {"name":"assets/images/carousel-imgs/samsung-f23.jpg"},
    ]
}