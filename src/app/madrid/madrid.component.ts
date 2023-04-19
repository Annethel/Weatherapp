import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { WeatherData } from '../models/weather.model';

import { WeatherserService } from '../services/weatherser.service';
import { WeatherService } from '../services/weather.service';
import { WeatherapiData } from '../models/weatherapp-model';

@Component({
  selector: 'app-madrid',
  templateUrl: './madrid.component.html',
  styleUrls: ['./madrid.component.css']
})
export class MadridComponent implements OnInit, OnChanges {

  @Input() item: string = "";
  name: string = 'Madrid';
  temp: number = 31;
  percent: number = 0;
  imgurl: string = "../../assets/images/sun.png"
  imgurl1: string = "../../assets/images/suncloud.png"
  imgurl2: string = "../../assets/images/raincloud.png"



 // constructor(private weatherservice: WeatherserService) { }
  
  ngOnInit(): void {


  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('item' in changes) {

      this.getweatherData.getWeather(this.item).subscribe({
        next: (value) => {
          this.weatherapiData = value;
          console.log(value)
        },
      })
    }
  }

  percentOfRain = () => {

  }

  weatherapiData?:WeatherapiData;
  constructor(private getweatherData:WeatherService){}

}



