import { Component, OnInit } from '@angular/core';
import { RoutingService } from 'src/app/services/routing.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(public routing: RoutingService) { }

  ngOnInit(): void {
    this.routing.home = 'active';
    this.routing.search = '';
    this.routing.category = '';
  }


}
