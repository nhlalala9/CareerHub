import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared/shared.component';
import { RouterModule, Routes } from '@angular/router';
import { TopnavComponent } from './topnav/topnav.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from '../public/homepage/homepage.component';
import { NodataComponent } from './nodata/nodata.component';

const routes: Routes = [
  {path: 'public/home', component: HomepageComponent},
];

@NgModule({
  declarations: [
    SharedComponent,
    TopnavComponent,
    NavbarComponent,
    NodataComponent
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [TopnavComponent, NavbarComponent,NodataComponent]
})
export class SharedModule { }
