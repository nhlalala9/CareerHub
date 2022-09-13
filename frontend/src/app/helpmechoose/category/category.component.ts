import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/services/category.service';
import { GetcategoryService } from 'src/app/services/getcategory.service';
import { RoutingService } from 'src/app/services/routing.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  public category$!: Observable<Category[]>;


  constructor(private getCategory: GetcategoryService, public routing: RoutingService) { }

 


  ngOnInit(): void {
    this.category$ = this.getCategory.getCategory();

    this.routing.category = 'active';
    this.routing.home = '';
    this.routing.search = '';
  }

}
