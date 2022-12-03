import { Component} from '@angular/core';
import { IOrder } from './place.model';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'; 
import { OrderService } from '../services/order.service';


@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent {

  catName:string|null = '';
  id:number = 0;
  orderid: number = Math.floor(Math.random() * 100000);
  price: number = 670;
  prodName: string = this.route.snapshot.params['itemname']
  url:string =''
  userInfo:string|null = localStorage.getItem('userResponse');
 
  constructor(
    private route:ActivatedRoute,
    private orderService:OrderService
  ) { }

  name = this.userInfo?this.userInfo.split(',')[1]:''
  email = this.userInfo?this.userInfo.split(',')[2]:''
  phone = this.userInfo?this.userInfo.split(',')[3]:''

  myOrder = new IOrder(this.name,this.email,'Hn 88 new delhi',Number(this.phone),this.price,this.orderid,this.prodName)



  submitForm(Form:NgForm):void{
    console.log(Form.value)
    this.orderService.postOrder(Form.value)
    .subscribe((res:any[]) => {console.log('Order Placed')})
    this.url='http://localhost:4000/paynow?amount='+Form.value.cost+'&orderId='+Form.value.id+'&email='+Form.value.email+'&phone='+Form.value.phone
  }

}
