import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public/public.component';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path: 'public', component: PublicComponent , children: [
  ]}
];

@NgModule({
  declarations: [
    PublicComponent,
    HomepageComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class PublicModule { }
