import { Component } from '@angular/core';
import { ILogin,loginRes,userRes } from './login.model';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './login.component.html'
})

export class LoginComponent{

    loginError:string=''

    constructor(
            private loginService: LoginService,
            private router: Router){}

    myEmployee = new ILogin('nidhi@gmail.com','12345678');
    submitForm(Form:NgForm):void{
        console.log(Form.value);
        
        this.loginService.loginEmp(Form.value)
            .subscribe((res:loginRes) => {
                this.loginError = ''
                this.loginService.getUserInfo(res['token'])
                .subscribe((response:userRes) => {this.validateUser(response['role'],response['name'],response['email'],response['phone'])})
            },
                (err:any[]) => {
                    this.loginError = "Please Enter Correct Details"
            })
    }

    validateUser(roleType:string,name:string,email:string,phone:string):void{
        let userResponse = `${roleType},${name},${email},${phone}`
        localStorage.setItem('userResponse',userResponse);
        localStorage.setItem('Role_Type',roleType);
        this.router.navigate(['/'])
    }
}