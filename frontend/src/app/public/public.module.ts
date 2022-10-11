import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public/public.component';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';

const routes: Routes = [
  {path: 'public', component: PublicComponent , children: [
    {path: 'home', component: HomepageComponent},
    {path: 'nav', component: NavbarComponent},
  ]}
];

@NgModule({
  declarations: [
    PublicComponent,
    HomepageComponent,
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class PublicModule { }
