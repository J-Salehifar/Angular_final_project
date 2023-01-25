import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient : HttpClient) { }
  getWeather(){
    return this.httpClient.get('//api.openweathermap.org/data/2.5/weather?q=Tehran,Ir&APPID=a58949449c23d677374ac427c976843d')
  }
}
