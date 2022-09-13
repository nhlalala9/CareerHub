import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor(private category: CategoryService) { }

  hold: any;

  ngOnInit(): void {

    this.category.browse = "Browse Category",

   this.category.category().subscribe(
     {
     next:(data: any)=>{
       console.log(data);
       this.hold = data;
     }
   })
  }
}
