import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { RoutingService } from 'src/app/services/routing.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  constructor(
    private category: CategoryService,
    public routing: RoutingService,
    private route: Router
  ) {}

  hold: any;

  ngOnInit(): void {
    this.routing.category = 'active';
    this.routing.home = '';
    this.routing.search = '';

    (this.category.browse = 'Browse Category'),
      this.category.category().subscribe({
        next: (data: any) => {
          console.log(data);
          this.hold = data;
        },
      });
  }

  sendId(num: any) {
    localStorage.setItem('careercategoryid', this.hold[num].id);
    localStorage.setItem('categoryname', this.hold[num].name);

    this.routing.dynamic = 'choose';
    this.route.navigate([`/choose/career`]);
  }
}
