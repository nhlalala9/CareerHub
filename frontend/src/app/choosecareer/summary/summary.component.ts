import { Component, OnInit } from '@angular/core';
import { SummaryService } from 'src/app/services/summary.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  constructor(private summary:SummaryService) { }

  //declaring 
  hold:any;
  image: any;
  careerpathName:any;

  ngOnInit(): void {
   this.careerpathName=localStorage.getItem('careername');

    this.summary.summary(localStorage.getItem('careerpathid')).subscribe({
      next:(data:any)=>{
        console.log(data);
        this.hold =  data;
      }
    })

    this.summary.salary(localStorage.getItem('careerpathid')).subscribe({
      next:(data:any)=>{
        console.log(data);
        this.image =  data;
      }
    })
  }

}
