import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { RoutingService } from 'src/app/services/routing.service';
import { Careercategory } from 'src/app/model/careercategory';
import { Observable, shareReplay } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  public careercategory$!: Observable<Careercategory[]>;

  constructor(
    private category: CategoryService,
    public routing: RoutingService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.routing.category = 'active';
    this.routing.home = '';
    this.routing.search = '';

    this.category.browse = 'Browse Category';

    this.careercategory$ = this.category.category().pipe(shareReplay(1));
  }
}
