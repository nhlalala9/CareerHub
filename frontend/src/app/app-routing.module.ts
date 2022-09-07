import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChoosecareerComponent } from './choosecareer/choosecareer/choosecareer.component';
import { PublicModule } from './public/public.module';
import { PublicComponent } from './public/public/public.component';

const routes: Routes = [
  {path: '', redirectTo: 'public', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
