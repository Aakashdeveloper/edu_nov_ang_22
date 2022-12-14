import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class OrderService{
    private orderUrl = "http://localhost:7890/orders";

    constructor(private http: HttpClient){}

    postOrder(order:any[]):Observable<any[]>{
        return this.http.post<any[]>(this.orderUrl,order)
    }

    getOrder(email:string):Observable<any[]>{
        return this.http.get<any[]>(`${this.orderUrl}?email=${email}`)
    }

    updateOrder(id:string,status:string,date:string,bank:string):Observable<any[]>{
        let data = {
            status,
            date,
            bank
        }
        return this.http.patch<any[]>(`${this.orderUrl}/${id}`,data)
    }
}