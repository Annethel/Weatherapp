import { Component, Input, SimpleChanges } from '@angular/core';
import { faDroplet, faSun, faTemperature0, faWind } from '@fortawesome/free-solid-svg-icons';
import { WeatherapiData } from '../models/weatherapp-model';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-aircondition',
  templateUrl: './aircondition.component.html',
  styleUrls: ['./aircondition.component.css']
})
export class AirconditionComponent {


    fonttemp = faTemperature0 ;
    fontdrop = faDroplet;
    fontwind = faWind ;
    fontsun = faSun;
  
    @Input() newdata: string = ""; 


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
    if ('newdata' in changes && changes['newdata'].currentValue) {
      const city = changes['newdata'].currentValue
      this.displayCurrentWeather(city)
    }
  }

  private displayCurrentWeather = (city: string) => {
    this.weatherService.getCurrent(city).subscribe(res => this.data = res)
  }

}