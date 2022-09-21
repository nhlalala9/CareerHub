import { Component, OnInit } from '@angular/core';
import { Spinkit } from 'ng-http-loader'; 

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  public spinkit = Spinkit; 
  
  constructor() { }

  ngOnInit(): void {
  }

}
