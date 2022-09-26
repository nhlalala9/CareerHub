import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { shareReplay, switchMap } from 'rxjs';
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
      next: (params) =>{
        this.careerpathName = params['name']
      }
      });
  }

  careerpathName: any;

  public requirements$ = this.route.paramMap.pipe(
    switchMap((params) =>
      this.requirements.getRequirements(params.get('id')).pipe(shareReplay(1))
    )
  );

  public qualifications$ = this.route.paramMap.pipe(
    switchMap((params )=>
      this.qualify.getQualification(params.get('id')).pipe(shareReplay(1))
    )
  )

  ngOnInit(): void {
    this.category.browse = '';
    this.routing.dynamic = 'choose';
  }
}
