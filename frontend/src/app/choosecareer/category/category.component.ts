import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  constructor(private category: CategoryService, private route: Router) {}

  hold: any;

  ngOnInit(): void {
    (this.category.browse = 'Browse Category'),
      this.category.category().subscribe({
        next: (data: any) => {
          console.log(data);
          this.hold = data;
        },
      });
  }









  sendId(num: any) {
   localStorage.setItem('careercategoryid', this.hold[num].id);

    this.route.navigate(['/choose/career']);
  }
}
