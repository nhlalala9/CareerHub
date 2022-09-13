import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/model/category';
import { GetcategoryService } from 'src/app/services/getcategory.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  public category$!: Observable<Category[]>;


  constructor(private getCategory: GetcategoryService) { }

 


  ngOnInit(): void {
    this.category$ = this.getCategory.getCategory();
  }

}
