import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChoosecareerComponent } from './choosecareer/choosecareer/choosecareer.component';
import { SearchComponent } from './choosecareer/search/search.component';
import { SummaryComponent } from './choosecareer/summary/summary.component';
import { PublicModule } from './public/public.module';
import { PublicComponent } from './public/public/public.component';

const routes: Routes = [
  {path: '', redirectTo: 'public/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
