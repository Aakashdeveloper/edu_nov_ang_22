import { Component,OnInit } from '@angular/core';
import { LoginService } from '../loginForm/login.service';
import { userRes } from '../loginForm/login.model';
import { Router } from '@angular/router';

@Component({
    templateUrl: './profile.component.html'
})

export class ProfileComponent implements OnInit {
    constructor(private loginService: LoginService,
         private router:Router){}

    token:string|null = '';
    userInfo: userRes = {
        "_id":"",
        "name":"",
        "email":"",
        "phone":"",
        "role":"",
        "__v":0
    }

    ngOnInit(): void {
        this.token = localStorage.getItem('Token_Number');
        this.loginService.getUserInfo(this.token?this.token:'')
            .subscribe((res:userRes) => this.userInfo = res)
    }

    logoutUser():void{
        localStorage.removeItem('Token_Number')
        localStorage.removeItem('Role_Type');
        this.router.navigate(['/login'])
    }
}