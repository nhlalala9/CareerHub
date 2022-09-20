import { Component, OnInit } from '@angular/core';
import { SummaryService } from 'src/app/services/summary.service';
import { CategoryService } from 'src/app/services/category.service';
import { RoutingService } from 'src/app/services/routing.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  public summary$= this.route.paramMap.pipe(
    switchMap((params)=>this.summary.summary([params.get('id')]))
  );

  public salary$ = this.route.paramMap.pipe(
    switchMap((params)=>this.summary.salary([params.get('id')]))
  )
  constructor(
    private summary: SummaryService,
    private category: CategoryService,
    public routing: RoutingService,
    private route: ActivatedRoute
  ) { route.params.subscribe({
    next: (params) =>{
      this.careerpathName = params['name']
    }
  })}

  //declaring

  careerpathName: any;

  ngOnInit(): void {
    this.category.browse = '';


    this.routing.search = 'active';
    this.routing.home = '';
    this.routing.category = '';

    this.routing.dynamic = 'choose';
  }
}
