import { RoutingService } from './../../services/routing.service';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { GetcareerService } from 'src/app/services/getcareer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  careers: any;
  careerHold: any;

  constructor(
    public routing: RoutingService,
    private category: CategoryService,
    private career: GetcareerService
  ) {}

  ngOnInit(): void {
    this.routing.search = 'active';
    this.routing.home = '';
    this.routing.category = '';
    this.category.browse = '';

    this.routing.dynamic = 'choose';

    this.career.getcareer().subscribe({
      next: (data: any) => {
        console.log(data);
        this.careers = data;
        this.careerHold = data;
      },
    });
  }

  term: any;
  show: boolean = false;

  showOrDont() {
    if (this.term == '') {
      this.show = false;
    } else {
      this.show = true;
    }
  }

  searching(value: string): void {
    this.showOrDont();

    this.careers = this.careers.filter(
      (val: any) => val.name.toUpperCase().includes(value.toUpperCase())
    );

    if (this.term == '') {
      this.careers = this.careerHold;
    }

    console.log(this.careers);
  }

  sendId(careerId: any){
    console.log(careerId);
  }
}
