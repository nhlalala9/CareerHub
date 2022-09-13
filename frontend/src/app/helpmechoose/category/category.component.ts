import { Component, OnInit } from '@angular/core';
import { GetcategoryService } from 'src/app/services/getcategory.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor(private getCategory: GetcategoryService) { }

  hold: any;


  ngOnInit(): void {
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
