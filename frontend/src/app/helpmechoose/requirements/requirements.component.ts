import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { RoutingService } from 'src/app/services/routing.service';

@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrls: ['./requirements.component.scss']
})
export class RequirementsComponent implements OnInit {

  constructor(public category: CategoryService, public routing: RoutingService) { }

  ngOnInit(): void {
    this.category.browse = ''
    this.routing.dynamic = 'help'
  }

}
