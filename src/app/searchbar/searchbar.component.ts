import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WeatherData } from '../models/weather.model';

import { WeatherserService } from '../services/weatherser.service';
import { WeatherService } from '../services/weather.service';
import { WeatherapiData } from '../models/weatherapp-model';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  
  constructor(private getweatherData:WeatherService){}



  @Output() newCityEvent = new EventEmitter<string>();

  weatherapiData?:WeatherapiData;
  cityName: string = '';

  ngOnInit(): void {
   
    this.cityName = '';

  }

  onSubmit() {
    this.newCityEvent.emit(this.cityName)
    
  }

  



}
