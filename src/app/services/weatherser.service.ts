import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData} from "../models/weather.model";

@Injectable({
  providedIn: 'root'
})
export class WeatherserService {
  weatherApiBaseUrl:string = 'https://bestweather.p.rapidapi.com/weather/1600%20Pennsylvania%20Avenue%20NW%20Washington,%20D.C/today'
  XRapidAPIHostHeaderName:string = 'X-RapidAPI-Host';
  XRapidAPIHostHeaderValue:string ='bestweather.p.rapidapi.com';
  XRapidAPIKeyHeaderName:string = 'X-RapidAPI-Key';
  XRapidAPIKeyHeaderValue:string = '4001803b5bmshcf297887b9ac9e0p1df324jsneb04e55707e0';
  






  constructor(private http: HttpClient) { }

  getWeatherData (cityName:string): Observable<WeatherData>{
      return this.http.get<WeatherData>(this.weatherApiBaseUrl, {
      headers: new HttpHeaders()
      .set(this.XRapidAPIHostHeaderName, this.XRapidAPIHostHeaderValue)
      .set(this.XRapidAPIKeyHeaderName, this.XRapidAPIKeyHeaderValue),
      params: new HttpParams()
      .set('location', '1600 Pennsylvania Avenue NW Washington, D.C')
      .set('unitGroup', 'us')
    })
  }
}
