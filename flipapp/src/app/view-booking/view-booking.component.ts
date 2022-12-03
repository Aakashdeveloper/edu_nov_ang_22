import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.css']
})
export class ViewBookingComponent implements OnInit {

  constructor(
    private orderService:OrderService,
    private route: ActivatedRoute
  ) { }

  orders:any[] = [];
  id:string|null='';
  status:string|null='';
  date:string|null='';
  bank:string|null=''
  userInfo:string|null = localStorage.getItem('userResponse');
  email = this.userInfo?this.userInfo.split(',')[2]:''

  ngOnInit(): void {
    this.id = this.route.snapshot.queryParamMap.get('ORDERID');
    this.id = this.id ? this.id:''
    this.status = this.route.snapshot.queryParamMap.get('status');
    this.status = this.status ? this.status:''
    this.date = this.route.snapshot.queryParamMap.get('date');
    this.date = this.date ? this.date:''
    this.bank = this.route.snapshot.queryParamMap.get('bank');
    this.bank = this.bank ? this.bank:''

    this.orderService.getOrder(this.email)
    .subscribe((data:any[]) => {
      this.orders=data
    })

    this.orderService.updateOrder(this.id,this.status,this.date,this.bank)
    .subscribe((data:any[]) => {
      console.log('info updated')
    })
  }

}
