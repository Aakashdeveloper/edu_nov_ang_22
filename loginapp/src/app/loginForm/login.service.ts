import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILogin,loginRes,userRes } from './login.model';

@Injectable()

export class LoginService{
    private baseUrl = "https://developerjwt.herokuapp.com/api/auth";

    constructor(private http: HttpClient){}

    loginEmp(user:loginRes):Observable<loginRes>{
        return this.http.post<loginRes>(`${this.baseUrl}/login`,user)
    }

    getUserInfo(token:string):Observable<userRes>{
        localStorage.setItem('Token_Number',token)
        return this.http.get<userRes>(`${this.baseUrl}/userinfo`,{headers:{'x-access-token':token}})
    }
}