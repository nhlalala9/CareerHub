import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { RoutingService } from 'src/app/services/routing.service';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.scss']
})
export class SuggestionComponent implements OnInit {

  constructor(public category: CategoryService, public routing: RoutingService) { }

  ngOnInit(): void {
    this.category.browse = ''
    this.routing.dynamic = 'help'
  }

}
