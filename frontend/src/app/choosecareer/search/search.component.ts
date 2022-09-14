import { RoutingService } from './../../services/routing.service';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(public routing: RoutingService) { }

  ngOnInit(): void {
    this.routing.search = 'active';
    this.routing.home = '';
    this.routing.category = '';

    this.routing.dynamic = 'choose'

  }


}
