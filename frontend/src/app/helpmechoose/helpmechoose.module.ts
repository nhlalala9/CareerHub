import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpmechooseComponent } from './helpmechoose/helpmechoose.component';
import { CategoryComponent } from './category/category.component';
import { QuestionComponent } from './question/question.component';
import { SuggestionComponent } from './suggestion/suggestion.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { LoaderComponent } from './loader/loader.component';
import { NotfoundComponent } from '../shared/notfound/notfound.component';

const routes: Routes = [
  {path: 'help', component: HelpmechooseComponent, children:[
    {path: 'question/:id', component: QuestionComponent},
    {path: 'category', component: CategoryComponent},
    {path: 'suggestion/:careerId/:careerIdTwo', component: SuggestionComponent},
    {path: '**', component: NotfoundComponent}
  ]}
]

@NgModule({
  declarations: [
    HelpmechooseComponent,
    CategoryComponent,
    QuestionComponent,
    SuggestionComponent,
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
