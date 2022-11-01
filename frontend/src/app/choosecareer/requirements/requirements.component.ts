import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { lowerCase } from 'cypress/types/lodash';
import { map, Observable, shareReplay, switchMap, tap } from 'rxjs';
import { Qualification } from 'src/app/model/qualification';
import { Requirements } from 'src/app/model/requirements';
import { CategoryService } from 'src/app/services/category.service';
import { QualificationService } from 'src/app/services/qualification.service';
import { RequirementsService } from 'src/app/services/requirements.service';
import { RoutingService } from 'src/app/services/routing.service';

@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrls: ['./requirements.component.scss'],
})
export class RequirementsComponent implements OnInit {
  constructor(
    public category: CategoryService,
    public routing: RoutingService,
    private route: ActivatedRoute,
    private requirements: RequirementsService,
    private qualify: QualificationService
  ) {
    route.params.subscribe({
      next: (params) => {
        this.careerpathName = params['name']
        if(this.careerpathName[0] == 'A' || (this.careerpathName[0]) == 'E' || (this.careerpathName[0]) == 'I' || (this.careerpathName[0]) == 'O' || (this.careerpathName[0]) == 'U'){
          this.title = 'an';
        }else{
          this.title = 'a';
        }
      }
    });
  }



  careerpathName: any;
  title: any;

  public requirements$ = this.route.paramMap.pipe(
    switchMap((params) =>
      this.requirements.getRequirements(params.get('id')).pipe(shareReplay(1))
    )
  );

  public qualification$!: Observable<Qualification[]>;

  requirementId!: number;

  ngOnInit(): void {
    this.category.browse = '';
    this.routing.dynamic = 'choose';

    this.routing.category = '';
    this.routing.home = 'active';
    this.routing.search = '';

    this.qualification$ = this.requirements$.pipe(
      switchMap((values: Requirements[]) =>
        this.qualify.getQualification(values[0].id).pipe(shareReplay(1))
      )
    )
  }
}
