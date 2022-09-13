import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared/shared.component';
import { RouterModule, Routes } from '@angular/router';
import { TopnavComponent } from './topnav/topnav.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  
];

@NgModule({
  declarations: [
    SharedComponent,
    TopnavComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [TopnavComponent, NavbarComponent]
})
export class SharedModule { }
