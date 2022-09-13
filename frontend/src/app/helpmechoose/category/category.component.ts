import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { GetcategoryService } from 'src/app/services/getcategory.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor(private getCategory: GetcategoryService,public category: CategoryService) { }

  hold: any;


  ngOnInit(): void {
    this.category.browse = ''
    
    this.getCategory.getCategory().subscribe(
      {
        next:(data: any)=>{
          console.log(data);
          this.hold = data;
        }

        
      }
    );
  }

}
