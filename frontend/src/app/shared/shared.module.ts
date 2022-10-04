import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared/shared.component';
import { RouterModule, Routes } from '@angular/router';
import { TopnavComponent } from './topnav/topnav.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from '../public/homepage/homepage.component';
import { NodataComponent } from './nodata/nodata.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NointernetComponent } from './nointernet/nointernet.component';

const routes: Routes = [
  {path: 'public/home', component: HomepageComponent},
  {path: 'nointernet', component: NointernetComponent}
];

@NgModule({
  declarations: [
    SharedComponent,
    TopnavComponent,
    NavbarComponent,
    NodataComponent,
    NotfoundComponent,
    NointernetComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [TopnavComponent, NavbarComponent,NodataComponent, NotfoundComponent]
})
export class SharedModule { }
