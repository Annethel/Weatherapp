import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { WeatherapiData } from '../models/weatherapp-model';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-madrid',
  templateUrl: './madrid.component.html',
  styleUrls: ['./madrid.component.css']
})
export class MadridComponent implements OnInit, OnChanges {

  @Input() queryCity: string = "";


  data: WeatherapiData = {};


  constructor(
    private weatherService: WeatherService,
  ) { }


  // constructor(private weatherservice: WeatherserService) { }

  ngOnInit(): void {

    this.displayCurrentWeather("Bamenda")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    if ('queryCity' in changes && changes['queryCity'].currentValue) {
      const city = changes['queryCity'].currentValue
      this.displayCurrentWeather(city)
    }
  }

  private displayCurrentWeather = (city: string) => {
    this.weatherService.getCurrent(city).subscribe(res => this.data = res)
  }

}



