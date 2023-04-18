import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { WeatherData } from '../models/weather.model';

import { WeatherserService } from '../services/weatherser.service';

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



  constructor(private weatherservice: WeatherserService) { }
  weatherData?: WeatherData;
  ngOnInit(): void {


  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('item' in changes) {

      this.weatherservice.getWeatherData(this.item).subscribe({
        next: (value) => {
          this.weatherData = value;
          console.log(value)
        },
      })
    }
  }

  percentOfRain = () => {

  }

}



