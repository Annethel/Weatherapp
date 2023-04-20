import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-container',
  templateUrl: './first-container.component.html',
  styleUrls: ['./first-container.component.css']
})
export class FirstContainerComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
  
  cityName:string= '';
  

  

  retrieveCityname = ($event: string) => {
    this.cityName = $event
  }
}
