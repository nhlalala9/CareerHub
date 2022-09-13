import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { RoutingService } from 'src/app/services/routing.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  constructor(public category: CategoryService, public routing: RoutingService) { }

  ngOnInit(): void {
    this.category.browse = ''
    this.routing.dynamic = 'choose'

  }

}
