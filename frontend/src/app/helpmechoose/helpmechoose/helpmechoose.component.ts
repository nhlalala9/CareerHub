import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-helpmechoose',
  templateUrl: './helpmechoose.component.html',
  styleUrls: ['./helpmechoose.component.scss']
})
export class HelpmechooseComponent implements OnInit {

  constructor(public category: CategoryService) { }

  ngOnInit(): void {
    this.category.browse = ''
  }

}
