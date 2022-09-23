import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {

  constructor(public category: CategoryService, private route: ActivatedRoute, private location: LocationStrategy) {
  
  }

  ngOnInit(): void {

  }

  back(){
    history.back();
  }

}
