import { Component,OnInit } from '@angular/core';
import { LoginService } from '../loginForm/login.service';
import { Router } from '@angular/router';
import { userRes } from '../loginForm/login.model';

@Component({
    selector: 'app-header',
    templateUrl:'./Header.component.html',
    styleUrls: ['./Header.component.css']
})

export class HeaderComponent implements OnInit{
    
    constructor(
        private loginService:LoginService,
        private router:Router){}

    token:string|null='';
    userInfo: userRes ={
        "_id":"",
        "name":"",
        "email":"",
        "phone":"",
        "role":"",
        "__v":0
    }
    loginStatus:boolean = false

    ngOnInit():void{
        this.token = localStorage.getItem('Token_Number');
        this.loginService.getUserInfo(this.token?this.token:'')
        .subscribe((res:userRes) => {
            this.userInfo = res;
            this.loginStatus = true
        })
    }

    logoutUser():void{
        localStorage.removeItem('Token_Number')
        localStorage.removeItem('userResponse');
        localStorage.removeItem('Role_Type');
        this.loginStatus = false;
        this.router.navigate(['/']);
        window.location.reload();

    }
}