import { Component, OnInit } from '@angular/core';
import { RoutingService } from 'src/app/services/routing.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor(public routing: RoutingService) { }

  ngOnInit(): void {
    this.routing.category = 'active';
    this.routing.home = '';
    this.routing.search = '';
  }

}
