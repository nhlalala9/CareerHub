import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChoosecareerComponent } from './choosecareer/choosecareer.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { CategoryComponent } from './category/category.component';
import { CareerComponent } from './career/career.component';
import { SummaryComponent } from './summary/summary.component';
import { RequirementsComponent } from './requirements/requirements.component';

const routes: Routes = [
  {path: 'choose', component: ChoosecareerComponent, children: [
    {path: 'career', component: CareerComponent},
    {path: 'category', component: CategoryComponent},
    {path: 'requirements', component: RequirementsComponent},
    {path: 'search', component: SearchComponent},
    {path: 'summary', component: SummaryComponent}
  ]}
]

@NgModule({
  declarations: [
    ChoosecareerComponent,
    SearchComponent,
    CategoryComponent,
    CareerComponent,
    SummaryComponent,
    RequirementsComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes), SharedModule
  ]
})
export class ChoosecareerModule { }
