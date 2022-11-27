import { Component, OnInit } from '@angular/core';
import { IOrder } from './place.model';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'; 


@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {

  catName:string|null = '';
  id:number = 0;
  orderid: number = Math.floor(Math.random() * 100000);
  price: number = 0;
  prodName: string = '';
  url:string =''

  constructor(
    private route:ActivatedRoute
  ) { }

  name = "";
  email = "";
  phone = "";

  myOrder = new IOrder(this.name,this.email,'Hn 88 new delhi',Number(this.phone),this.price,this.orderid,this.prodName)

  ngOnInit(): void {
    this.catName = this.route.snapshot.params['catName']
    this.id = this.route.snapshot.params['id']
  }

  submitForm(){}

}
