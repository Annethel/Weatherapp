import { Component, Input, SimpleChanges } from '@angular/core';
import { Forecastday, WeatherapiData } from '../models/weatherapp-model';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent {
@Input() item: string = "";
tittle:string = "TODAY'S FORECAST"
data:WeatherapiData = {};
dataOfCurrentDay?: Forecastday;

constructor(
  private weatherService: WeatherService,
){}


contentDetails:Array<Details> =[
  {time:'6:00 AM', img:"../../assets/images/cloud.png", temp:25},
  {time:'9:00 AM', img:"../../assets/images/suncloud.png", temp:28},
  {time:'12:00 AM', img:"../../assets/images/sun.png", temp:33},
  {time:'3:00 PM', img:"../../assets/images/sun.png", temp:34},
  {time:'4:00 AM', img:"../../assets/images/sun.png", temp:32},
  {time:'9:00 AM', img:"../../assets/images/suncloud.png", temp:30},
  
]

ngOnInit(): void {

  this.displayCurrentWeather("Bamenda")
}

ngOnChanges(changes: SimpleChanges): void {
  console.log(changes)
  if ('item' in changes && changes['item'].currentValue) {
    const city = changes['item'].currentValue
    this.displayCurrentWeather(city)
  }
}

private displayCurrentWeather = (city: string) => {
  this.weatherService.getForecast(city).subscribe(res => {
    this.data = res;

    if (res.forecast && res.forecast.forecastday.length > 0) {
      this.dataOfCurrentDay = res.forecast?.forecastday[0]
    }
  })
}


}
interface Details {
  id?:number;
  time:String;
  img:string;
  temp:number;

}