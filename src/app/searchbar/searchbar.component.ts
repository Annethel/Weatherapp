import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WeatherData } from '../models/weather.model';

import { WeatherserService } from '../services/weatherser.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  constructor(private weatherservice: WeatherserService) { }


  @Output() newCityEvent = new EventEmitter<string>();

  weatherData?: WeatherData;
  cityName: string = '';

  ngOnInit(): void {
   
    this.cityName = '';

  }

  onSubmit() {
    this.newCityEvent.emit(this.cityName)
    
  }

  



}
