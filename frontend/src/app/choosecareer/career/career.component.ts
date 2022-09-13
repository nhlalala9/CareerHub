import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { RoutingService } from 'src/app/services/routing.service';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {

  constructor(public category: CategoryService, public routing: RoutingService) { }

  ngOnInit(): void {
    this.category.browse = '';
    this.routing.dynamic = 'choose'
  }

}
