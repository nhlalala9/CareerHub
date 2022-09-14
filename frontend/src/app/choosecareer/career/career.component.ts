import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { GetcareerService } from 'src/app/services/getcareer.service';
import { RoutingService } from 'src/app/services/routing.service';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {

  constructor(private getcareer: GetcareerService, private route: Router,private category: CategoryService,
    public routing: RoutingService,) { }

  hold: any;
  categoryId: any;
  categoryName: any;

  ngOnInit(): void {

    this.categoryId = localStorage.getItem('careercategoryid');
    this.categoryName = localStorage.getItem('categoryname');

    this.getcareer.getcareerpath(this.categoryId).subscribe(
      {
        next:(data: any) =>{
          console.log(data);
          this.hold = data;
        }
      }
    )
    this.category.browse = ''
    this.routing.dynamic = 'choose'
    this.routing.category = '';
    this.routing.home = 'active';
    this.routing.search = '';
  }

  sendcareer(index: any){
    localStorage.setItem('careerpathid', this.hold[index].id);
    localStorage.setItem('careername', this.hold[index].name);
    this.route.navigate(['/choose/summary'])
  }

}
