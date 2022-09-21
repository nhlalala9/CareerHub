import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { shareReplay, switchMap } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';
import { GetcareerService } from 'src/app/services/getcareer.service';
import { RoutingService } from 'src/app/services/routing.service';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss'],
})
export class CareerComponent implements OnInit {

  public career$ = this.router.paramMap.pipe(
    switchMap((params)=>
      this.getcareer.getcareerpath(params.get('id')).pipe(shareReplay(1))
    )
  );

  constructor(
    private getcareer: GetcareerService,
    private category: CategoryService,
    public routing: RoutingService,
    private router: ActivatedRoute
  ) {
    router.params.subscribe({
      next: (params) =>{
        this.categoryName = params['name']
      }
    })
  }

  categoryId: any;
  categoryName: any;

  ngOnInit(): void {

    
    this.category.browse = '';
    this.routing.dynamic = 'choose';
    this.routing.category = '';
    this.routing.home = 'active';
    this.routing.search = '';
  }
}
