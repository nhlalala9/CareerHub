import { Component, OnInit } from '@angular/core';
import { RoutingService } from 'src/app/services/routing.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public routing: RoutingService) { }

  active: string = "active";

  ngOnInit(): void {

  }

}
