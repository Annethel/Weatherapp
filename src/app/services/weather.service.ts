import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Current, WeatherapiData } from '../models/weatherapp-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  urlCurrent = `${environment.apiUrl}/current.json`;
  urlForecast = `${environment.apiUrl}/forecast.json`;
  key = environment.apiKey;

  constructor(private http: HttpClient) { }

  getCurrent = (city: string): Observable<WeatherapiData> => {
    return this.http.get<WeatherapiData>(
      this.urlCurrent,
      {
        params: {
          key: this.key,
          q: city,
          aqi: "no",
          alerts: "no"
        }
      }
    );
  } 

  getForecast = (city:string):Observable<WeatherapiData> =>{
    return this.http.get<WeatherapiData>(
      this.urlForecast,{
        params:{
          key:this.key,
          q:city,
          days:1,
          aqi: "no",
          alerts: "no"
        }

      }

    );
  }

  getForecastDays = (city:string):Observable<WeatherapiData> =>{
    return this.http.get<WeatherapiData>(
      this.urlForecast,{
        params:{
          key:this.key,
          q:city,
          days:7,
          aqi: "no",
          alerts: "no"
        }

      }

    );
  }
}
