import { Component, OnInit } from '@angular/core';
import { SummaryService } from 'src/app/services/summary.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  constructor(private summary:SummaryService) { }

  hold:any;

  ngOnInit(): void {
    this.summary.summary().subscribe({
      next:(data:any)=>{
        console.log(data);
        this.hold =  data;
      }
    })
  }

}
