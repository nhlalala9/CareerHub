import { Component, OnInit } from '@angular/core';
import { SummaryService } from 'src/app/services/summary.service';
import { CategoryService } from 'src/app/services/category.service';
import { RoutingService } from 'src/app/services/routing.service';
import { ActivatedRoute } from '@angular/router';
import { shareReplay, switchMap } from 'rxjs';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  public summary$= this.route.paramMap.pipe(
    switchMap((params)=>this.summary.summary([params.get('id')]).pipe(shareReplay(1)))
  );

  public salary$ = this.route.paramMap.pipe(
    switchMap((params)=>this.summary.salary([params.get('id')]).pipe(shareReplay(1)))
  )
  constructor(
    private summary: SummaryService,
    private category: CategoryService,
    public routing: RoutingService,
    private route: ActivatedRoute
  ) { route.params.subscribe({
    next: (params) =>{
      this.careerpathName = params['name'],
      this.careerpathId = params['id']

    }
  })}

  //declaring

  careerpathName: any;
  careerpathId!: number;

  ngOnInit(): void {
    this.category.browse = '';

    this.routing.category = '';
    this.routing.home = 'active';
    this.routing.search = '';


    this.routing.dynamic = 'choose';
  }
}
