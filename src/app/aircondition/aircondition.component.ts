import { Component } from '@angular/core';
import { faDroplet, faSun, faTemperature0, faWind } from '@fortawesome/free-solid-svg-icons';

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
  
    airInfo: Array<Write> = [
      {id: 1, icon:this.fonttemp, word: "Real Feel", num:30},
      {id: 1, icon:this.fontwind, word: "Wind", num:0.2},
      {id: 2, icon:this.fontdrop, word: "Chance of rain", num:0}, 
      {id: 1, icon:this.fontsun, word: "UV Index", num:3}
    
    ]

}
interface Write{
  id?:number
  icon:any;
  word:string;
  num:number
}