import { Component } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent {
  imgUrl:string = "../../assets/images/umbrella.png";
  pageHeading:string = "Breeze";
  secondHeading:string ="Weather App";

}
