import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsService } from '../services/details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit,OnDestroy {

  catName:string|null = '';
  id:number = 0;
  details:any[] = []
 
  constructor(private route: ActivatedRoute,
              private detailsService: DetailsService) { }

  ngOnInit(): void {
    this.catName = this.route.snapshot.queryParamMap.get('catName');
    this.id = Number(this.route.snapshot.queryParamMap.get('id'))
    this.detailsService.getDetails(this.catName,this.id)
      .subscribe((data:any[]) => this.details = data)
  }

  ngOnDestroy() {
    console.log('in ngOnDestroy')
  }

}
