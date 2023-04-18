import { Component, OnInit } from '@angular/core';
import { WeatherData } from '../models/weather.model';
import { WeatherserService } from '../services/weatherser.service';

@Component({
  selector: 'app-first-container',
  templateUrl: './first-container.component.html',
  styleUrls: ['./first-container.component.css']
})
export class FirstContainerComponent implements OnInit {

  constructor(private weatherservice: WeatherserService) { }
  ngOnInit(): void {
  }
  
  cityName:string= '';
  

  

  retrieveCityname = ($event: string) => this.cityName = $event
}
