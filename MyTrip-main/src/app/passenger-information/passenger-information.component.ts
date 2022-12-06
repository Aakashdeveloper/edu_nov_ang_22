import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {User} from '../model/user.model'
import {checkPermission,pages} from '../utils'
@Component({
  selector: 'app-passenger-information',
  templateUrl: './passenger-information.component.html',
  styleUrls: ['./passenger-information.component.css']
})
export class PassengerInformationComponent implements OnInit {
  user : User = {
    userName : '',
    mobile : '',
    email : '',
  }
  constructor(private router :Router) { }

  ngOnInit(): void {
    if(!checkPermission(pages.INFO)){
      this.router.navigate(['/bus-search'])
    }
  }
  onClickSubmit(): any{
    console.log(this.user)
    localStorage.setItem('userDetails', JSON.stringify(this.user))
    this.router.navigate(['/review-bus-ticket'])
  }

}
