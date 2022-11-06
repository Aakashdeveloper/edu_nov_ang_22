import { Component } from '@angular/core';
import { ICloths } from '../../model/home.model';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-cloths',
  templateUrl: './cloths.component.html',
  styleUrls: ['./cloths.component.css']
})
export class ClothsComponent{

  cloths:ICloths[]=[
    {
      "_id": "62e01595d27d3d5b00ac4c30",
      "image": "https://i.ibb.co/TLF2RxV/297407530256.jpg",
      "brand": "Shyamcollections",
      "description": "Boys & Girls Party(Festive) T-shirt Shorts",
      "new_price": 45,
      "old_price": 999,
      "discount": 59,
      "delivery_type": "Free delivery",
      "hidden_stars": 4.5,
      "item_id": 75
    },
    {
      "_id": "62e01595d27d3d5b00ac4c10",
      "image": "https://i.ibb.co/b2G2Vm4/c06bbea9e94b.jpg",
      "brand": "IDISI CLOTHES",
      "description": "Unstitched Polycotton Shirt Fabric Floral Print",
      "new_price": 249,
      "old_price": 999,
      "discount": 75,
      "delivery_type": "Free delivery",
      "hidden_stars": 3.5,
      "item_id": 43
    },
    {
      "_id": "62e01595d27d3d5b00ac4c12",
      "image": "https://i.ibb.co/5TSq4xG/d02ee336cbad.jpg",
      "brand": "IDISI CLOTHES",
      "description": "Unstitched Polycotton Shirt Fabric Printed",
      "new_price": 249,
      "old_price": 999,
      "discount": 75,
      "delivery_type": "Free delivery",
      "hidden_stars": 4.1,
      "item_id": 45
    },
    {
      "_id": "62e01595d27d3d5b00ac4c21",
      "image": "https://i.ibb.co/kx58JLq/17b1e3f5773a.jpg",
      "brand": "IDISI CLOTHES",
      "description": "The Boo Boo Club Baby Boys & Baby Girls Green Bodysuit",
      "new_price": 348,
      "old_price": 1,
      "discount": 65,
      "delivery_type": "Free delivery",
      "hidden_stars": 4,
      "item_id": 60
    },
    {
      "_id": "62e01595d27d3d5b00ac4c0b",
      "image": "https://i.ibb.co/7NNLfHz/fddb0bf40510.jpg",
      "brand": "NEW ETHNIC FASHION",
      "description": "Women Printed Poly Crepe Straight Kurta",
      "new_price": 32,
      "old_price": 1599,
      "discount": 79,
      "delivery_type": "Free delivery",
      "hidden_stars": 4.1,
      "item_id": 38
    }
  ]

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}
