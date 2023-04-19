import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherapiData } from '../models/weatherapp-model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weatherapiUrl:string ='http://api.weatherapi.com/v1/forecast.json?key=11e41c2fa05349c8b1c122313231904&q=London&days=1&aqi=no&alerts=no'

  constructor(private httpClient:HttpClient) { }

  getWeather =(cityName:string) :Observable<WeatherapiData> =>{
    return this.httpClient.get<WeatherapiData>(this.weatherapiUrl, {params: new HttpParams()
      .set('q', 'cityName')
      .set('day', '1')
      .set('aqi', 'no')
      .set('alerts', 'no')

    });
  }
}
