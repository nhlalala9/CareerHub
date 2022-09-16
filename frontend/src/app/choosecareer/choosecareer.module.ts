import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChoosecareerComponent } from './choosecareer/choosecareer.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { CategoryComponent } from './category/category.component';
import { CareerComponent } from './career/career.component';
import { SummaryComponent } from './summary/summary.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { SharedModule } from '../shared/shared.module';
import { SearchfilterPipe } from '../pipes/searchfilter.pipe';
import { FormsModule } from '@angular/forms';



const routes: Routes = [
  {path: 'choose', component: ChoosecareerComponent, children: [
    {path: 'career/:id/:name', component: CareerComponent},
    {path: 'category', component: CategoryComponent},
    {path: 'requirements', component: RequirementsComponent},
    {path: 'search', component: SearchComponent},
    {path: 'summary', component: SummaryComponent},
    {path: 'summary/:id/:name', component: SummaryComponent}
  ]}
]

@NgModule({
  declarations: [
    ChoosecareerComponent,
    SearchComponent,
    CategoryComponent,
    CareerComponent,
    SummaryComponent,
    RequirementsComponent,
    SearchfilterPipe
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes),SharedModule,FormsModule
  ]
})
export class ChoosecareerModule { }
