import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { RoutingService } from 'src/app/services/routing.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  constructor(public category: CategoryService, public routing: RoutingService) { }

  ngOnInit(): void {
    this.category.browse = ''
    this.routing.dynamic = 'help'
  }

}
