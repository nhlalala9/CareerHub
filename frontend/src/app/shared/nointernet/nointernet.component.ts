import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nointernet',
  templateUrl: './nointernet.component.html',
  styleUrls: ['./nointernet.component.scss']
})
export class NointernetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  reload(){
    history.back();
  }
}
