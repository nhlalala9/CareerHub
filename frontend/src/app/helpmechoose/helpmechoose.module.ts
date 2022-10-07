import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpmechooseComponent } from './helpmechoose/helpmechoose.component';
import { CategoryComponent } from './category/category.component';
import { QuestionComponent } from './question/question.component';
import { MultiComponent } from './question/multi/multi.component';
import { SingleComponent } from './question/single/single.component';
import { SuggestionComponent } from './suggestion/suggestion.component';
import { SummaryComponent } from './summary/summary.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { LoaderComponent } from './loader/loader.component';
import { NotfoundComponent } from '../shared/notfound/notfound.component';

const routes: Routes = [
  {path: 'help', component: HelpmechooseComponent, children:[
    {path: 'question/:id', component: QuestionComponent},
    {path: 'question/single', component: SingleComponent},
    {path: 'category', component: CategoryComponent},
    {path: 'requirements', component: RequirementsComponent},
    {path: 'summary', component: SummaryComponent},
    {path: 'suggestion', component: SuggestionComponent},
    {path: '**', component: NotfoundComponent}
  ]}
]

@NgModule({
  declarations: [
    HelpmechooseComponent,
    CategoryComponent,
    QuestionComponent,
    MultiComponent,
    SingleComponent,
    SuggestionComponent,
    SummaryComponent,
    RequirementsComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule, 
    RouterModule.forChild(routes),
    SharedModule,
    NgHttpLoaderModule.forRoot()
  ]
})
export class HelpmechooseModule { }
