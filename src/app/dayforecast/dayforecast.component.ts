import { Component } from '@angular/core';

@Component({
  selector: 'app-dayforecast',
  templateUrl: './dayforecast.component.html',
  styleUrls: ['./dayforecast.component.css']
})
export class DayforecastComponent {
  tittle:string = "7-DAY FORECAST"

contentDetails:Array<Details> =[
  {day:'Today', img:"../../assets/images/sun.png", word:"Sunny", date:"36/22"},
  {day:'Tue', img:"../../assets/images/sun.png", word:"Sunny", date:"37/21"},
  {day:"Wed", img:"../../assets/images/sun.png", word:"Sunny", date:"37/21"},
  {day:'Thur', img:"../../assets/images/cloud.png", word:"Cloudy", date:"37/21"},
  {day:'Fri', img:"../../assets/images/cloud.png", word:"Cloudy", date:"37/21"},
  {day:'Sat', img:"../../assets/images/cloud.png", word:"Cloudy", date:"37/21"},
  {day:'Sun', img:"../../assets/images/sun.png", word:"Sunny", date:"37/21"}
  
]
}
interface Details {
  id?:number;
  day:String;
  img:string;
  word:string;
  date:string



}
