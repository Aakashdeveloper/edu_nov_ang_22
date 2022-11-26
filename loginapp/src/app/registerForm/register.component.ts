import { Component } from '@angular/core';
import { IUser } from './register.model';
import { NgForm } from '@angular/forms';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './register.component.html'
})

export class RegisterComponent{

    constructor(
            private registerService: RegisterService,
            private router: Router){}

    myEmployee = new IUser('Kanika','kanika@gmail.com','12345678','9876543210');
    submitForm(Form:NgForm):void{
        console.log(Form.value);
        
        this.registerService.registerEmp(Form.value)
            .subscribe((res:any[]) => {console.log(`Form Submitted`)})
        this.router.navigate(['/login'])
    }
}