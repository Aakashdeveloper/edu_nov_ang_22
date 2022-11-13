import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  catName:string|null = '';
  id:number = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.catName = this.route.snapshot.queryParamMap.get('catName');
    this.id = Number(this.route.snapshot.queryParamMap.get('id'))
  }

}
