import { Component } from '@angular/core';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent {
tittle:string = "TODAY'S FORECAST"

contentDetails:Array<Details> =[
  {time:'6:00 AM', img:"../../assets/images/cloud.png", temp:25},
  {time:'9:00 AM', img:"../../assets/images/suncloud.png", temp:28},
  {time:'12:00 AM', img:"../../assets/images/sun.png", temp:33},
  {time:'3:00 PM', img:"../../assets/images/sun.png", temp:34},
  {time:'4:00 AM', img:"../../assets/images/sun.png", temp:32},
  {time:'9:00 AM', img:"../../assets/images/suncloud.png", temp:30},
  
]
}
interface Details {
  id?:number;
  time:String;
  img:string;
  temp:number;

}